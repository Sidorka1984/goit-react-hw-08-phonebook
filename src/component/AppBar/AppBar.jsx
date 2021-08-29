import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import authSelectors from '../../redux/auth/auth-selectors.js';
import { Header } from "./AppBar.styles";

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Header>
            <Navigation />
            { isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
}