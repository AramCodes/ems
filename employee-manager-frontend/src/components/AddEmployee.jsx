import React, {useState} from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber:""  
  }); 
  
  const navigate = useNavigate();

  const handleChange = (event) => {
    setEmployee({...employee, [event.target.name]: event.target.value })  
  }

  const saveEmployee = (event) => {
    event.preventDefault();
    EmployeeService.saveEmployee(employee)
    .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });;
  } 

  const reset = (event) => {
    event.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber:""  
    })
  }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
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
                onClick={saveEmployee}
                >
                    Save Employee
                </button>

                <button 
                className='rounded text-white font-semibold bg-red-600 py-2 px-6 my-3 hover:bg-red-800'
                onClick={reset}
                >
                    Clear Data
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee
