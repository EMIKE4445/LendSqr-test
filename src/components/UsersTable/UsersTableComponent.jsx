import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import orderBy from 'lodash/orderBy';
import Table from '@mui/material/Table';
import Pagination from '@mui/material/Pagination';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './userstable.scss';
import { SortIcon, Kebab, ViewUser, BlacklistUser, ActivateUser } from './TableIcons';
import Filter from '../Filter/Filter'


// const row = (x, i, header)=> {
//     let r = Array.from(x);
//     console.log(r);
//     console.log(x);
//     <TableRow key={r['id']} >
//         {
//            header.map((y, k) => {
//             <TableCell key={k}> { r[y.prop] }</TableCell>
//            })
//         }
//     </TableRow>
// }

const convertTime = (time) => {
    let timeStamp = Date.parse(time);
    let date = new Date(timeStamp);

    let formatedYear = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' , hour12 : 'true'});
    let formatedTime = date.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});

    return (
        <span className='date'>
            <span className='date-year'>{ formatedYear }</span>
            <span className='date-time'>{ formatedTime }</span>
        </span>
    )
}

export default function UsersTableComponent({ header, data, filters}) {

    const invertSortOrderMap = {
        asc : 'desc',
        desc : 'asc'
    }

    const [ sortedTableData, setSortedTableData ] = useState([]);
    const [ displayedTableData, setDisplayedTableData ] = useState([]);
    const [ columnToSortBy, setColumnToSortBy ] = useState('');
    const [ sortDirection, setSortDirection ] = useState('desc');
    const [ pageSize, setPageSize ] = useState(10);
    const [ totalSize, setTotalSize ] = useState(0);
    const [currentPage, setCurrentPage ] = useState(1);
    const [from, setFrom ] = useState(0);
    const [to, setTo ] = useState(pageSize);

    const handleSort = (columnName) => {
        setColumnToSortBy(columnName);
        setSortDirection(
            columnToSortBy === columnName ? invertSortOrderMap[sortDirection] : 'asc'
        );
    }

    useEffect(() => {
        // console.log(data)
        setSortedTableData(orderBy(data, columnToSortBy, sortDirection));
        setTotalSize(sortedTableData.length)
    }, [data,columnToSortBy, sortDirection])

    useEffect(() => {
        setDisplayedTableData(sortedTableData.slice(from, to));
    },[sortedTableData,from,pageSize])


    const handlePageChange = (event, page) => {
        console.log(typeof(page))
        let fromValue = (page - 1) * pageSize;
        let toValue = ((page -1 ) * pageSize) + pageSize;

        setFrom(fromValue);
        setTo(toValue);
        setCurrentPage(page)
    }

    const handlePageCountChange = (e) => {
        let page = Number(e.target.value);
        setCurrentPage(1);
        setPageSize(page)
        setFrom(0);
        setTo(page);
    }


    return (
        <div className='table-container' >
            <Filter setData={setDisplayedTableData} filters= { filters } tableData= { sortedTableData } />
            <TableContainer data-simplebar className='table' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="users table">
                    <TableHead>
                        <TableRow>
                            {
                                header.map((x, i) =>
                                    <TableCell key = {i} >
                                        <div onClick={() => handleSort(x.prop)}>
                                            {x.name}
                                            <span className= {`table-sort-icon-${columnToSortBy === x.prop ? (
                                                sortDirection === 'asc' ? 'up' : 'down'
                                            ) : "down"}`} >
                                                <SortIcon />
                                            </span>
                                        </div>
                                    </TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        displayedTableData.map((x,i) => (
                            <TableRow key={i}>
                                <TableCell > { x.orgName }</TableCell>
                                <TableCell > { x.userName }</TableCell>
                                <TableCell > { x.email }</TableCell>
                                <TableCell > { x.phoneNumber }</TableCell>
                                <TableCell >
                                    {
                                        convertTime(x.createdAt)
                                    }
                                </TableCell>
                                <TableCell >
                                     <div className="kebab-menu">
                                        <Kebab />
                                        <div className="kebab-menu-content">
                                            <ul>
                                                <li> <Link to={`${x.id}`} ><ViewUser /> View Details</Link></li>
                                                <li> <BlacklistUser /> Blacklist User</li>
                                                <li> <ActivateUser /> Activate User</li>
                                            </ul>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="table-bottom-nav">
                <div className='table-bottom-nav-select'>
                    <span>Showing </span>
                    <select onChange={handlePageCountChange} >
                        <option selected value='10' > 10 </option>
                        <option value='20' > 20 </option>
                        <option value='50' > 50 </option>
                        <option value='100' > 100 </option>

                    </select>
                    <span>out of {totalSize} </span>
                </div>
                <Pagination
                    count={ Math.ceil(totalSize / pageSize) }
                    page = {currentPage}
                    onChange= {handlePageChange}
                    shape="rounded"
                />
            </div>
        </div>
    );
}
