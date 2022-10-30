import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {
    const [student, setStudent] = useState({
      name: "",
      email: "",
      password: "",
      school_id: "",
      course_id: "",
    });

    const[errors, setErrors] = useState([])
    const navigate = useNavigate()
    function handleChange(e) {        
        setStudent({ ...student, [e.target.name]: e.target.value });        
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://devbugger.herokuapp.com/students", {
          method: "POST",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(student),
        }).then((r) => {
          if (r.ok) {
            navigate("/");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
    }

    const errorMessage = (errors.map((error, index)=>(
      <ul>
        <li className='error' key={index}>{error}</li>
      </ul>
    )))
  return (
    <div className='containCreateForm'>
      {errors.length > 0?  errorMessage : null}
      <form onSubmit={handleSubmit} className="addForm" >
			<input type="text" 
				defaultValue={student.name}
        placeholder="Enter Student Name"
				name="name"
				onChange={handleChange}
				 />

         <input type="text" 
				defaultValue={student.email}
        placeholder="Enter Student Email"
				name="email"
				onChange={handleChange}
				 />


                 
			<br />
			<label htmlFor='body' />
			<textarea 
				type="text" 
        placeholder='Blog body goes here,  30 characters minimum'
				rows="10"
				columns="100"
				defaultValue={blog.content}
				name="content"
				onChange={handleChange}
			/>
			<br />
			<input type="submit"  value="Submit"/>
		</form>
    </div>
  );
}

export default CreateBlog