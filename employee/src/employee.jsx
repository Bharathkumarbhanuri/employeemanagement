import React, {useState } from 'react'
function Employee() {

    const [Age, setAge] = useState("");

    const ageCalc = (date) => {

        const today_year = new Date().getFullYear();
        const today_month = new Date().getMonth() + 1;
        const today_date = new Date().getDate();

        const dob_year = new Date(date).getFullYear();
        const dob_month = new Date(date).getMonth() + 1;
        const dob_date = new Date(date).getDate();

        let age = null;

        if (today_date >= dob_date) {
            if (today_month >= dob_month) {
                age = today_year - dob_year;
            }
            age = today_year - dob_year-1;
        } else if(today_month >= dob_month) {
            age = today_year - dob_year;
        } else {
            age = today_year - dob_year-1;
        }
        console.log(age);
        setAge(age);
    }

    const handleSubmit = () => {
        console.log();
        alert('form submitted successfully');
    }

    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Employee Section</h1>
            <form className='mt-8 border border-black py-10 px-16 rounded-lg shadow-lg' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <input type="text" className='mb-6 w-52 border border-black rounded py-1 px-4' placeholder='employee name' required />
                    <input type="date" className='mb-6 w-52 border border-black rounded py-1 px-4' onChange={(e) => ageCalc(e.target.value)} required />
                    <h1 className='mb-6 text-xl'>Age:{Age}</h1>
                    <select name="department" className='mb-6 w-52 border border-black rounded py-1 px-4'>
                        <option value="accounts">select department</option>
                        <option value="accounts">Accounts</option>
                        <option value="accounts">HR</option>
                        <option value="accounts">Admin</option>
                    </select>
                    <input type="number" className='mb-6 w-52 border border-black rounded py-1 px-4' placeholder='salary' />
                    <input className=' w-52 text-lg border text-white rounded py-1 bg-blue-500' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Employee
