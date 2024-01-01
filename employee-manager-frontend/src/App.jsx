import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from './components/AddEmployee'
import GetEmployeeList from './components/GetEmployeeList'
import Header from './components/Header'
import UpdateEmployee from './components/UpdateEmployee'

function App() {

  return (
    <>
      <BrowserRouter >
        <Header />

        <Routes>
            <Route path='/' element={<GetEmployeeList />}></Route>
            <Route index element={<GetEmployeeList />} />
            <Route path='/employeeList' element={<GetEmployeeList />} />
            <Route path='/addEmployee' element={<AddEmployee />} />
            <Route path='/editEmployee/:id' element={<UpdateEmployee />} />
        </Routes>
        
        
        

      </BrowserRouter >  
    </>
  )
}

export default App
