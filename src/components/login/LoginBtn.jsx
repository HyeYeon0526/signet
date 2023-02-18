import { Link } from "react-router-dom";

function LoginBtn(){
    return (
        <Link to={`@/Login`}>
            <button> Login </button>
        </Link>
    )
}

export default LoginBtn;