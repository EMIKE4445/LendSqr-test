import './users.scss';
import * as React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import DisplayWidget from '../../components/DisplayWidget/DisplayWidget';
import {
        UsersIcon,
        ActiveUsersIcon,
        UsersWithLoanIcon,
        UsersWithSavingsIcon } from './Icons';
import TableComponent from '../../components/UsersTable/UsersTableComponent';

const URL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';

const UsersTableheader = [
    {
        name: 'organization',
        prop: 'orgName'
    },
    {
        name: 'Username',
        prop: 'userName'
    },
    {
        name: 'Email',
        prop: 'email'
    },
    {
        name: 'Phone number',
        prop: 'phoneNumber'
    },
    {
        name: 'Date joined',
        prop: 'createdAt'
    },
]

const UsersTableFilters = [
    {
        name: 'organization',
        prop: 'orgName',
        filterType : 'select'
    },
    {
        name: 'Username',
        prop: 'userName',
        filterType : 'text'
    },
    {
        name: 'Email',
        prop: 'email',
        filterType : 'email'
    },
    {
        name: 'Phone number',
        prop: 'phoneNumber',
        filterType : 'tel'
    },
    {
        name: 'Date joined',
        prop: 'createdAt',
        filterType : 'date'
    }
]

const Users = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((response) => {
               return response.json();
            })
            .then((response) => {
                setUsers(response);
                // console.log(response);
            })
            .catch((error) => {
                setUsers([]);
            })
    }, []);



    return (
        <div>
            <NavBar />
            <div className="page-container">
                <SideBar />
                <div className="page-content-wrapper">
                    <span className="page-title">Users</span>
                    <div className="page-summary">
                        <DisplayWidget
                            icon={<UsersIcon />}
                            title={'users'}
                            content={'2,453'}
                        />
                        <DisplayWidget
                            icon={<ActiveUsersIcon />}
                            title={'Active Users'}
                            content={'2,453'}
                        />
                        <DisplayWidget
                            icon={<UsersWithLoanIcon />}
                            title={'Users with Loans'}
                            content={'2,453'}
                        />
                        <DisplayWidget
                            icon={<UsersWithSavingsIcon />}
                            title={'Users with Savings'}
                            content={'2,453'}
                        />
                    </div>
                    <TableComponent header = {UsersTableheader}  data = { users } filters= { UsersTableFilters } />
                </div>
            </div>
        </div>
    )
}

export default Users;
