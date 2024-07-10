import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
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