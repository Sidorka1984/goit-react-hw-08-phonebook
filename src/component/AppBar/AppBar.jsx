import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import authSelectors from '../../redux/auth/auth-selectors.js';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <header>
            <Navigation />
            { isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}