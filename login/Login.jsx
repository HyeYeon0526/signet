function Login() {
    return (
        <form action="submit">
            <input type="text" placeholder="ID" />
            <input type="password" placeholder="PW"/>
            <button action='submit'> 로그인 </button>
        </form>
    )
}

export default Login;