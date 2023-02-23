import { Router } from "react-router-dom";
import classes from '@/components/login/Login.module.css';

function LoginBtn(){
    return (
        <button className={classes.btn}> Login </button>
    )
}

export default LoginBtn;