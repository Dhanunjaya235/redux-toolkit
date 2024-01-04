import { Button } from 'react-bootstrap';
import styles from '../styles.module.css';
const Login = () => {


    const logIn=(e:any)=>{
        e.preventDefault();
    }


    return (
        <div className={styles.wrapper}>
            <h1>LoginForm</h1>
            <div className='form'>
                <form>
                    <div className='field'>
                        <input type='text' placeholder='Enter Your Email Adddress' />
                    </div>
                    <div className='field'>
                        <input type='password' placeholder='Enter Your Password' />
                    </div>
                    <Button type='submit'>Login</Button>
                    <div className={styles.signupLink}>
                        Create An Account <a href="#" >Register</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;