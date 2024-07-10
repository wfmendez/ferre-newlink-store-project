import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
          <h1>Página de inicio de sesión</h1>
          <button onClick={logGoogleUser}>
            Iniciar sesión con Google
          </button>
        </div>
    )
}

export default SignIn