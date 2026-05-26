import React from 'react'

const Form = () => {
  return (
    <>
      <h1>Welcome to Form Tag</h1>
      <form>
        <label>Name:   </label>
        <input type="text" name="name" placeholder="enter Your Name" /><br />
         <label>Mobile Number</label>
          <input type="text" name="mobile" placeholder="enter Your Mobile Number" /><br />
          <label>Enter Your Email</label>
           <input type="email" name="email" placeholder="enter Your Email" /><br />
           <label> Date of Birth</label>
            <input type="Date" name="dob" placeholder="enter Your Dob" /><br />
       <label>Gender</label>
       <input type="Radio" name="gender" value={'Male'} />Male
        <input type="Radio" name="gender" value={'Female'} />Female
         <input type="Radio" name="gender" value={'Other'} />Other <br />
         <label>Religion</label>
         <select name="Religion" id="">
         <option value="Hindu">Hindu</option>
         <option value="muslim">Muslim</option>
         <option value="Sikh">Sikh</option> <br />
         <label>Message</label>
         <textarea></textarea>
         <label>Image</label>
         </select><br />
             <label>Message</label>
         <textarea></textarea><br />
         <label>Image</label>
         <input type="file" name="image" /><br />
         <label>Password</label>
         <input type="Password" name='pass'  /><br />
         <input type="checkbox"  name="check"/>
         <input />Please Confirm. <br />
         <button type ="submit">submit</button>

      </form>
    </>
  )
}

export default Form
