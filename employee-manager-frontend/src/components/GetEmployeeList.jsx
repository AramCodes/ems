import React, { useEffect, useState } from 'react'
import loader from '../assets/loader.svg'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import Employee from './Employee'

const GetEmployeeList = () => {
    const [loading, setLoading] = useState(true)
    const [employees, setEmployees] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            setLoading(true);

            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.error(error)
            }
            setTimeout(() => setLoading(false), 1000);
        }
        fetchEmployees();
    }, [])

    const deleteEmployee = (event, id) => { 
        event.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then((response) =>{
            if(employees) {
                setEmployees((prevEmployees) => {
                    return prevEmployees.filter((employee) => employee.id !== id);
                })
            }
        })
    }

    if (loading) { 
        return (
            <main className='flex justify-center items-center py-72'>
                <img src={loader} alt="loader widget" className='mb-10' />
            </main>
        )

    } else if (!loading) {
        return (
            <main className='container mx-auto my-8'>
                <div className='h-12'>
                    <button className='rounded bg-emerald-300 text-white py-2 px-6 font-semibold'
                    onClick={() => navigate("/addEmployee")}
                    >
                        Add Employee
                    </button>
                </div>

                <div className='flex shadow border-b'>
                    <table className='min-w-full'>
                        <thead className='bg-sky-50'>
                            <tr>
                                <th className='text-left font-medium text-gray-700 uppercase tracking-wider py-3 px-5'>First Name</th> 
                                <th className='text-left font-medium text-gray-700 uppercase tracking-wider py-3 px-5'>Last Name</th> 
                                <th className='text-left font-medium text-gray-700 uppercase tracking-wider py-3 px-5'>Email Address</th> 
                                <th className='text-left font-medium text-gray-700 uppercase tracking-wider py-3 px-5'>Phone Number</th> 
                                <th className='text-right font-medium text-gray-700 uppercase tracking-wider py-3 px-5'>Actions</th>
                            </tr>
                        </thead>
                        {!loading && (
                        <tbody className="bg-white">
                            {employees.map((employee) => (
                                <Employee
                                key={employee.id}
                                employee={employee}
                                deleteEmployee={deleteEmployee}
                                />
                            ))}
                        </tbody>
          )}
                    </table>
                </div>
            </main>
        )
    }
  
}

export default GetEmployeeList
