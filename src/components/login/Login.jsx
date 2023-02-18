import { Link } from "react-router-dom";

function Login() {
    return (
        <form action="submit" onSubmit='return false;'>
            <input type="text" placeholder="ID" />
            <input type="password" placeholder="PW"/>
            <button action='submit'> 로그인 </button>
            <Link to={`@/Membership`}>
                <button> 회원가입 </button>
            </Link>


        </form>
    )
}

export default Login;