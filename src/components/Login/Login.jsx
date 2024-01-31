import { Link } from 'react-router-dom';

import './login.scss'

function Login() {
    return (
        <div className='login-wrapper'>
            <div className='login'>
                <div>LOGIN</div>
                <div>REGISTRACE</div>
                <Link to="/">Zpět</Link>
            </div>
        </div>
    );
}

export default Login;