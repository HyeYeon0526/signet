function Membership() {
    return(
        <form action="submit">
            <label for='name'> 이름 : 
                <input type="text" id='name'/>
            </label>
            <label for='id'> 아이디 : 
                <input type="text" id='id' />
            </label>
            <label for='password'> 비밀번호 : 
                <input type="text" for='password' />
            </label>
            <button action='submit'> 회원가입 </button>
        </form>
    )
}

export default Membership;