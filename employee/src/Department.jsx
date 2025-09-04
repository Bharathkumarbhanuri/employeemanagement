import React, { useState } from 'react'
import DataTable from 'react-data-table-component';


function Department() {

    const [department, setDepartment] = useState("All");

    const columns = [
        { name: 'Employee_name', selector: row => row.Employee_name, sortable: true },
        { name: 'DOB', selector: row => row.DOB, sortable: true },
        { name: 'Age', selector: row => row.Age, sortable: true },
        { name: 'Department', selector: row => row.Department, sortable: true },
        { name: 'Salary', selector: row => row.Salary, sortable: true },
    ]

    const data = [
        { id: 1, Employee_name: 'bharath', DOB: '23-03-2004', Age: '21', Department: 'Accounts', Salary: 46700 },
        { id: 2, Employee_name: 'virat', DOB: '05-11-2003', Age: '36', Department: 'HR', Salary: 10000000 },
        { id: 3, Employee_name: 'kumar', DOB: '26-04-1985', Age: '40', Department: 'Admin', Salary: 30000 },
        { id: 4, Employee_name: 'vamsi', DOB: '11-09-1995', Age: '30', Department: 'Admin', Salary: 65000 },
        { id: 5, Employee_name: 'prashanth', DOB: '01-01-2000', Age: '25', Department: 'Accounts', Salary: 560000 },
        { id: 6, Employee_name: 'ravi teja', DOB: '31-12-2002', Age: '23', Department: 'HR', Salary: 42000 },
    ]

    function myTable() {
        console.log(data);
        return <DataTable columns={columns} data={filteredData} highlightOnHover />;
    }

    const filteredData = department === "All" ? data : data.filter(row => row.Department === department);

    return (
        <div>
            <div className='flex mb-6 mt-6'>
                <h1 className='text-3xl font-bold ml-2 mr-16'>Department Section</h1>
                <select name="Departments" onClick={(e) => setDepartment(e.target.value)}>
                    <option value="All">choose the department</option>
                    <option value="Accounts" >Accounts</option>
                    <option value="HR">HR</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div>
                {myTable()}
            </div>
        </div>
    )
}

export default Department
