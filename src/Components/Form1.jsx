import React from 'react'

const Form1 = () => {
  return (
    <>
      <h1>Welcome to Admission Form</h1>
      <h2>Student Details</h2>
      <form>
        <label>Name:</label>
        <input type="text " name="name" placeholder='Enter Your Name'/><br />
         
           <label>Email:</label>
             <input type="email " name="email" placeholder='Enter Your Email'/><br />
              <label> Date of Birth</label>
            <input type="Date" name="dob" placeholder="enter Your Dob" /><br />
             <label>Gender:</label>
               <input type="Radio" name="gender" value={'Male'} />Male
        <input type="Radio" name="gender" value={'Female'} />Female
         <input type="Radio" name="gender" value={'Other'} />Other <br />
         <label>Branch:</label>
         <select name='Branch' >
         <option value="Computer Science">Computer Science</option>
         <option value="Mechanical Engineering">Mechanical Engineering</option>
         <option value="Civil Engineering">Civil Engineering</option>
         <option value="ElectricalEngineering">Electrical Engineering</option><br />
         </select>
         <h2>Parent Details</h2>
         <label>Father's Name</label>
           <input type="text " name="name" placeholder='Enter Your Fathers Name'/><br />
             <label>Mobile:</label>
           <input type="text" name="mobile" placeholder='Enter Your Mothers Number'/><br />
        <label>Mother's Name</label>
          
        
           <input type="text " name="name" placeholder='Enter Your Mothers Name'/><br />

        <input />Please Confirm. <br />
         <button type ="submit">submit</button>
           
      </form>
    </>
  )
}

export default Form1
