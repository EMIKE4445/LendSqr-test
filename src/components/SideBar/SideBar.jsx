import './sidebar.scss';
import  { NavLink } from  "react-router-dom";

import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import HomeIcon from '@mui/icons-material/Home';
// import PeopleIcon from '@mui/icons-material/People';
// import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// import PaidIcon from '@mui/icons-material/Paid';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import SavingsIcon from '@mui/icons-material/Savings';
// import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    DashboardIcon, BriefcaseIcon, GurrantorsIcon, LoanIcon, HandshakeIcon,
    SavingsIcon, LoanRequestsIcon, UserCheckIcon, UserCancelIcon, SavingsProductsIcon,
    FeesIcon, TransactionsIcon, ServicesIcon, UsersIcon, ServiceAccountIcon,
    SettlementsIcon, ReportsIcon, PreferencesIcon, PricingIcon, AuditIcon,
    SystemMessageIcon, LogoutIcon
} from './SideBarIcons';




const SideBar = () => {

    const [ showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar-hamburger" onClick={toggleSidebar}><MenuIcon /></div>
            <div className={showSidebar? "sidebar-content show-sidebar" : "sidebar-content hide-sidebar" }>
                <div className="switch-org">
                    <BriefcaseIcon />
                    <span>Switch Organization</span>
                    <ExpandMoreIcon />
                </div>

                <div className="section">
                    <ul>
                        <li>
                            <NavLink to="/dashboard">
                                <DashboardIcon />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <span className="section-title">
                        Customers
                    </span>
                    <ul>
                        <li>
                            <NavLink to="/users">
                                <UsersIcon />
                                <span>users</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gurrantors">
                                <GurrantorsIcon />
                                <span>gurrantors</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/loans">
                                <LoanIcon />
                                <span>loans</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/decision-Models">
                                <HandshakeIcon />
                                <span>Decision Models</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/savings">
                                <SavingsIcon />
                                <span>savings</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/loan-requests">
                                <LoanRequestsIcon />
                                <span>loan requests</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/whitelist">
                                <UserCheckIcon />
                                <span>whitelist</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/karma">
                                <UserCancelIcon />
                                <span>karma</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <span className="section-title">
                        business
                    </span>
                    <ul>
                        <li>
                            <NavLink to="/organization">
                                <BriefcaseIcon />
                                <span>organization</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/loan-products">
                                <LoanRequestsIcon />
                                <span>loan products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/savings-Products">
                                <SavingsProductsIcon />
                                <span>Savings Products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Fees">
                                <FeesIcon />
                                <span>Fees and Charges</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/transactions">
                                <TransactionsIcon />
                                <span>Transactions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">
                                <ServicesIcon />
                                <span>Services</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/service-account">
                                <ServiceAccountIcon />
                                <span>Service Account</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settlements">
                                <SettlementsIcon />
                                <span>Settlements</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/reports">
                                <ReportsIcon />
                                <span>Reports</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="section">
                <span className="section-title">
                    settings
                </span>
                <ul>
                    <li>
                        <NavLink to="/Preferences">
                            <PreferencesIcon />
                            <span>Preferences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/fees-and-pricing">
                            <PricingIcon />
                            <span>Fees and Pricing</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/audit-Logs">
                            <AuditIcon />
                            <span>Audit Logs</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Messages">
                            <SystemMessageIcon />
                            <span>Systems Messages</span>
                        </NavLink>
                    </li>
                    <li>
                            <NavLink to="/Logout">
                                <LogoutIcon />
                                <span>Logout</span>
                            </NavLink>
                        </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default SideBar
