import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header'>
                <Link to="/login">REGISTRACE / LOGIN</Link>
            </div>
        </div>
    );
}

export default Header;