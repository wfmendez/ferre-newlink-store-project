import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
      setFormFields(defaultFormFields)
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const response = await signInWithUserWithEmailAndPassword(
            email,
            password)
            console.log(response)
            resetFormFields();
        } catch(error) {
          switch(error.code) {
            case 'auth/wrong-password':
              alert('Contraseña incorrecta');
              break;
            case 'auth/user-not-found':
              alert('No hay un usuario asociado a este correo');
              break;
            default:
              console.log(error);
          }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };
    
    return(
        <div className='sign-up-container'>
            <h2>¿Ya tienes una cuenta?</h2>
            <span>Ingresa con tu correo y contraseña</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                  label="Correo"
                  inputOptions={{
                    type: "email", 
                    required: true,
                    onChange: handleChange, 
                    name: 'email',
                    value: email,
                  }}
                />

                <FormInput  
                  label="Contraseña"
                  inputOptions={{
                    type: "password", 
                    required: true,
                    onChange: handleChange, 
                    name: 'password',
                    value: password,
                  }}
                />
                <div className='buttons-container'>
                <Button type="submit">Iniciar sesión</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}>Iniciar con Google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;