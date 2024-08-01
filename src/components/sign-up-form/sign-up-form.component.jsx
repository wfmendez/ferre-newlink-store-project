import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
      setFormFields(defaultFormFields)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password != confirmPassword) {
            alert("Contraseña no coincide.");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch(error) {
          if(error.code == 'auth/email-already-in-use') {
            alert('El correo ya tiene una cuenta creada');
          } else {
            console.log('Error en la cración del usuario', error);
          }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };
    
    return(
        <div className='sign-up-container'>
            <h2>¿No tienes una cuenta?</h2>
            <span>Registrate con tu correo y contraseña</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                  label="Nombre y Apellido"
                  inputOptions={{
                    type: "text", 
                    required: true, 
                    onChange: handleChange, 
                    name: 'displayName',
                    value: displayName,
                  }}
                />

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

                <FormInput
                  label="Confirmar contraseña"
                  inputOptions={{
                    type: "password", 
                    required: true, 
                    onChange: handleChange, 
                    name: 'confirmPassword',
                    value: confirmPassword,
                  }}
                />

                <Button type="submit">Registrarse</Button>
            </form>
        </div>
    );
};

export default SignUpForm;