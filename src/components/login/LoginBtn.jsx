import { Link, Router } from "react-router-dom";

function LoginBtn(){
    return (
        <Router>
            <Link to={`@/Login`}>
                <button> Login </button>
            </Link>            
        </Router>

    )
}

export default LoginBtn;