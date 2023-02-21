import { Link, Router } from "react-router-dom";

function Login() {
    return (
        <form action="submit" onSubmit='return false;'>
            <input type="text" placeholder="ID" />
            <input type="password" placeholder="PW"/>
            <button action='submit'> 로그인 </button>
            <Router>
                <Link to={`@/Membership`}>
                    <button> 회원가입 </button>
                </Link>  
            </Router>



        </form>
    )
}

export default Login;