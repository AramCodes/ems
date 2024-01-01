import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const handleChange = (event) => {
        setEmployee({ ...employee, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(employee.id);
                setEmployee(response.data);
              } catch (error) {
                console.error(error);
              }
        }
        fetchEmployee();
    },[]);

    const updateEmployee = (event) => {
        event.preventDefault();
        console.log(employee);
        EmployeeService.updateEmployee(employee, id)
        .then((response) => {
            navigate("/employeeList");
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Update Employee</h1>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal' htmlFor="firstName">First 
                Name</label>
                <input type="text" id='firstName' className='h-10 w-96 border mt-2 p-2 ' 
                name='firstName'
                value={employee.firstName}
                onChange={handleChange}
                />
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal' htmlFor="lastName">Last Name
                </label>
                <input type="text" id='lastName' className='h-10 w-96 border mt-2 p-2 ' 
                name='lastName'
                value={employee.lastName}
                onChange={handleChange}
                />
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal' htmlFor="email">Email</label>
                <input type="text" id='email' className='h-10 w-96 border mt-2 p-2 ' 
                placeholder='joe@schome.com'
                name='email'
                value={employee.email}
                onChange={handleChange}
                />
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal' htmlFor="phoneNumber">Phone 
                Number</label>
                <input type="tel" id='phoneNumber' className='h-10 w-96 border mt-2 p-2 ' 
                placeholder='(XXX) XXX -XXXX'
                name='phoneNumber'
                value={employee.phoneNumber}
                onChange={handleChange}
                />
            </div>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button className='rounded text-white font-semibold bg-blue-600 py-2 px-6 my-3 hover:bg-blue-800'
                onClick={updateEmployee}
                >
                    Update Employee
                </button>

                <button 
                className='rounded text-white font-semibold bg-red-600 py-2 px-6 my-3 hover:bg-red-800'
                onClick={() => navigate("/employeeList")}
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployee
