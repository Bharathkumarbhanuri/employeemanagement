import React, {useEffect, useState } from 'react'
import Employee from './employee';
import Department from './Department';
import Finance from './Finance';


function App() {
  const [timeNow, setTimeNow] = useState('');
  const [dateNow, setDateNow] = useState('');
  const [isEmployeeClicked, setIsEmployeeClicked] = useState(false);
  const [isDepartmentClicked, setIsDepartmentClicked] = useState(false);
  const [isFinanceClicked, setIsFinanceClicked] = useState(false);

  useEffect(() => {
    setInterval (()=>{
    const today = new Date();
    const datestr = today.toLocaleDateString('en-IN');
    const timeStr = today.toLocaleTimeString(); 
    setTimeNow(timeStr);
    setDateNow(datestr);
    }, 1000)
  }, []);


  const handleIsEmployeeClicked = () => {
    setIsDepartmentClicked(false);
    setIsFinanceClicked(false);
    setIsEmployeeClicked(true);
  }

  const handleIsDepartmentClicked = () => {
    setIsEmployeeClicked(false);
    setIsFinanceClicked(false);
    setIsDepartmentClicked(true);
  }

  const handleIsFinanceClicked = () => {
    setIsEmployeeClicked(false);
    setIsDepartmentClicked(false);
    setIsFinanceClicked(true);
  }

  return (
    <div className='bg-white flex w-full min-h-screen'>
      <div className='bg-gray-100 w-1/5 flex-col '>
        <div className='flex flex-col p-10'>
          <h1 className='p-10 text-3xl font-bold text-center'>Menu</h1>
          <button className='p-2 text-xl font-semibold border-2 border-gray-400 mb-2' onClick={handleIsEmployeeClicked}>Employee</button>
          <button className='p-2 text-xl font-semibold border-2 border-gray-400 mb-2' onClick={handleIsDepartmentClicked}>Department</button>
          <button className='p-2 text-xl font-semibold border-2  border-gray-400 mb-2' onClick={handleIsFinanceClicked}>Finance</button>
        </div>
      </div>

      <div className='w-4/5 bg-sky-100'>

        {/* time date */}
        <div className='flex justify-end py-2'>
          <h1 className='pr-3 text-2xl'>{dateNow}</h1>
          <h1 className='pr-3 text-2xl'>{timeNow}</h1>
        </div>

        {/* components */}
        <div className='h-fit flex flex-col items-center'>
          {isDepartmentClicked ? <Department /> : isFinanceClicked ? <Finance /> : <Employee />}
        </div>
      </div>

    </div>
  )
}

export default App
