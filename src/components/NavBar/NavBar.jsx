import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import  { Link } from  "react-router-dom";
import './navbar.scss';
import Logo from '../Logo/Logo';


const NavBar = () => {
    return (
        <div className="navbar">
            <Logo />
            <div className="navbar-main">
                <div className="search">
                    <input type="text" name="search" id="" placeholder="Search for anything" />
                    <div className="search-btn">
                        <SearchIcon />
                    </div>
                </div>
                <div className="nav-links">
                    <Link className="nav-doc-link" to="/docs">Docs</Link>
                    <div className="nav-notification">
                        <NotificationsNoneIcon />
                    </div>
                    <div className="nav-user">
                        <img src="/assets/img/avatar.png" alt="user avatar" />
                        <span className="nav-user-name">Adedeji</span>
                        <ArrowDropDownIcon className="nav-dropdown-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
