import './singleuser.scss';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';
import { Link, NavLink, useParams, Outlet, useNavigate  } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';


import { UserContext } from '../../Context/Context';

const db = new Dexie('Michael-test');
db.version(1).stores({
    user: 'user'
})

const { user } = db;

const SingleUser = () => {

    const userResult = useLiveQuery(() => user.toArray(), []);

    const [userContent, setUserContent] =useState({});
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!/\d+/.test(userId)) {
          navigate('/error');
        }
    }, [userId, navigate]);

    let URL= "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/" + userId;

    useEffect(() => {
        fetch(URL)
            .then((response) => {
               return response.json();
            })
            .then((response) => {
                response = JSON.stringify(response);
                if(db.user) {
                    db.user.clear();
                }
                db.user.add( {
                    user :
                    response
                } )
                .then(() => {});
            })
            .catch((error) => {
            })
    },[]);

    useEffect( () =>{
        async  function setUser(){
            let resultDetails = await userResult[0].user;
            setUserContent(JSON.parse(resultDetails));
        };
        setUser()

    },[userResult])


    return (
        // <span>{`${userContent.profile?.currency} ${userContent.accountBalance}`}</span>
            <div>
                <NavBar />
                <div className="page-container">
                    <SideBar />
                    <div className="page-content-wrapper">
                        <div className="go-back-link">
                            <Link to = "/users"> <KeyboardBackspaceIcon /> Back to Users</Link>
                        </div>
                        <div className="page-title-container">
                        <span className="page-title">User details</span>
                        <div className="page-title-actions">
                            <button>Blacklist User</button>
                            <button>Activate User</button>
                        </div>
                        </div>
                        <div className="user-summary">
                            <div className="user-summary-content">
                                <div className="user-summary-content-profile">
                                    <img src={userContent.profile?.avatar} alt="" />
                                    <div>
                                        <span>{`${userContent.profile?.firstName} ${userContent.profile?.lastName}`}</span>
                                        <span>{`${userContent.accountNumber}`}</span>
                                    </div>

                                </div>

                                <div className="user-summary-content-account">
                                    <span>{`${userContent.profile?.currency} ${userContent.accountBalance}`}</span>
                                    <span>{`${userContent.profile?.bvn}`}</span>
                                </div>
                            </div>

                            <div className="user-content-nav-container">
                                <div className="user-content-nav">
                                    <NavLink to="general">General Details</NavLink>
                                    <NavLink to="documents">Documents</NavLink>
                                    <NavLink to="bank-Details">Bank Details</NavLink>
                                    <NavLink to="loans">Loans</NavLink>
                                    <NavLink to="savings">Savings</NavLink>
                                    <NavLink to="system">App and System</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="user-content">
                            <UserContext.Provider value={{ userContent, userId}} >
                                <Outlet />
                            </UserContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SingleUser
