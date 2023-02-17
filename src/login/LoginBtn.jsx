import { Link } from "react-router-dom";
import Login from '@/login/Login';

function LoginBtn(){
    return (
        <Link to={'Login'}>
            <button> Login </button>
        </Link>
    )
}

export default LoginBtn;