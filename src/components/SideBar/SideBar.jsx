import './sidebar.scss';
import  { Link } from  "react-router-dom";

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PaidIcon from '@mui/icons-material/Paid';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SavingsIcon from '@mui/icons-material/Savings';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className="switch-org">
                    <WorkOutlineIcon />
                    <span>Switch Organization</span>
                    <ExpandMoreIcon />
                </div>

                <div className="section">
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <HomeIcon />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <span className="section-title">
                        Customers
                    </span>
                    <ul>
                        <li>
                            <Link to="/users">
                                <PeopleIcon />
                                <span>users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <PeopleOutlineIcon />
                                <span>gurrantors</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <PaidIcon />
                                <span>loans</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <HandshakeIcon />
                                <span>Decision Models</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <SavingsIcon />
                                <span>savings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <RequestQuoteIcon />
                                <span>loan requests</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <PersonAddAltIcon />
                                <span>whitelist</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <PersonRemoveIcon />
                                <span>karma</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <span className="section-title">
                        business
                    </span>
                    <ul>
                        <li>
                            <Link to="/">
                                <WorkOutlineIcon />
                                <span>organization</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <RequestQuoteIcon />
                                <span>loan products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <PaidIcon />
                                <span>Savings Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <HandshakeIcon />
                                <span>Fees and Charges</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <SavingsIcon />
                                <span>Transactions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <RequestQuoteIcon />
                                <span>Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <PersonAddAltIcon />
                                <span>Service Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <PersonRemoveIcon />
                                <span>Settlements</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <RequestQuoteIcon />
                                <span>Reports</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="section">
                <span className="section-title">
                    settings
                </span>
                <ul>
                    <li>
                        <Link to="/">
                            <WorkOutlineIcon />
                            <span>organization</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <RequestQuoteIcon />
                            <span>Preferences</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <PaidIcon />
                            <span>Fees and Pricing</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <HandshakeIcon />
                            <span>Audit Logs</span>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default SideBar
