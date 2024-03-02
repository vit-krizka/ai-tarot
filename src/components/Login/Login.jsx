import { Link } from 'react-router-dom';

import './login.scss';

function Login() {

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h2>Přihlášení</h2>
                <Link to="/">Zpět do aplikace</Link>
            </div>
        </div>
    );
}

export default Login;
