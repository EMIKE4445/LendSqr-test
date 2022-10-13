import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import './filter.scss'
const filterObjectArray = require('filter-object-array');


const Filter = ({ setData, filters, tableData }) => {

    const [filterInputs, SetFilterInputs] = useState([]);
    const [userFilterInputs, SetUserFilterInputs] = useState({});
    const [userFilterDateInputs, SetUserFilterDateInputs] = useState({});
    const [displayFilters, setDisplayFilters] = useState(false);

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date) {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
            
        ].join('-');
      }

    const generateSelectInputOptions = (columnName) => {
        return (
            new Set(
                tableData.map((dataRow) => {
                    return (
                        dataRow[columnName]
                    )
                })
            )
        )
    }

    const displayFilterSelectInput = (input) => {
        let options = generateSelectInputOptions(input.prop)
        options = [...options];

        return (
            <select name={input.prop} onChange={handleInputChange}>
                <option  selected disabled > select </option>
                {
                    options.map((option) => {
                        return (
                            <option value={option} > {option} </option>
                        )
                    })
                }
            </select>
        )
    }

    useEffect(() => {
        SetFilterInputs(filters)
    }, [filters])


    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        type ==='date' ? SetUserFilterDateInputs({...userFilterDateInputs, [name] : value}) : SetUserFilterInputs({ ...userFilterInputs, [name] : value});
    }

    const submit = (e) => {

        let noEmptyValueInput = Object.entries(userFilterInputs).filter((x) =>{
            return x[1].trim().length !==0
        })

        noEmptyValueInput = Object.fromEntries(noEmptyValueInput);
        SetUserFilterInputs(noEmptyValueInput);

        filterFunction();
        setDisplayFilters(!displayFilters);
    }

    const reset = (e) => {
        setData(tableData)
        SetUserFilterInputs({});
        SetUserFilterDateInputs({});
        filterFormRef.current?.reset();
        setDisplayFilters(!displayFilters);
    }


    const filterFunction = async () => {
        let dates = Object.keys(userFilterDateInputs).map((key) => [(key), userFilterDateInputs[key]]);

        let criteriaPasedData = await filterObjectArray({ array: tableData, objFilter: userFilterInputs, ignoreDataType: true });
        console.log(criteriaPasedData)

        if(dates.length !== 0) {
            criteriaPasedData = criteriaPasedData.filter((row)=>{
                return formatDate(new Date(row[dates[0][0]])) === dates[0][1];
            })
        }
        console.log(criteriaPasedData)

        setData(criteriaPasedData);
    }

    let filterFormRef = useRef();

    return (
        <div className="table-filters">
            <button className="filter-btn" onClick={ ()=>{setDisplayFilters(!displayFilters)}} >Filter</button>
            {
                displayFilters ? (
                    <div className="filters-form-container">
                    <form ref={filterFormRef } >
                        {
                            filterInputs.map((input,i)=>{
                                return (
                                    <div key={i} className="filter-input-group">
                                        <label>{input.name}</label>
                                        {
                                            input.filterType === 'select' ? (
                                                displayFilterSelectInput(input)
                                            ) :
                                            <input name={input.prop} type={input.filterType} onChange={handleInputChange} placeholder={input.name} />
                                        }
                                    </div>
                                )
                            })
                        }
                    </form>
                    <div className="filters-form-btn-container">
                        <button onClick={reset}>reset</button>
                        <button onClick={submit}>filter</button>
                    </div>
                </div>
                ) : null
            }
          

        </div>
    )
}

export default Filter
