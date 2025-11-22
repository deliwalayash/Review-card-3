import React, { useState } from "react";
import Card from './Card'

const Form2 = () => {
  const darkthemeclass =
  "bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500";

 const lightthemeclass =
  "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500";

  const [theme, setTheme] = useState("dark");
  const [user,setUser]=useState({
    name:"",
    review:"",
    email:"",
    imgURL:"",
    rating:"",
  })
  const [users,setUsers]=useState([])
  const handleChange =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    setErr({...err,[e.target.name + "Error"]:""})
  }
  const [err,setErr]=useState({})
  const handleSubmit= (e)=>{
    e.preventDefault()
    const emeilRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const errObj={}
    if(user.name.trim()==""){
      errObj.nameError ="Please Enter Name"
    }
    if(user.email.trim()=="" || !emeilRegex.test(user.email)){
      errObj.emailError ="Please Enter Valid Email"
    }
    if(user.review.trim()==""){
      errObj.reviewError ="Please Give Review of Product"
    }
    if(user.imgURL.trim()==""){
       errObj.imgURLError ="Please Enter Image URL"
    }
    if(user.rating ==""){
       errObj.ratingError ="Please Give Product Rating"
    }
    setErr(errObj)
    if(Object.keys(errObj).length > 0){
      return
    }
    setUsers([...users,user])
    setUser({
       name:"",
    review:"",
    email:"",
    imgURL:"",
    rating:"",
    })

  }
  console.log(users)
  
 

  return (
    <div className="dark">
        <h1 className="text-white text-5xl text-center my-8 font-semibold mt-24">
          Product Review Card
        </h1>
      <form className="max-w-sm mx-auto " noValidate onSubmit={handleSubmit}>
        <div className="mb-5 ">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`${theme === "dark" ? darkthemeclass : lightthemeclass}`}
            placeholder="Name"
            name="name"
            value={user.name} onChange={handleChange}
            required
          />
             <p class="mt-2 text-sm text-red-600 dark:text-red-500">{err.nameError}</p>
        </div>
        <div className="mb-5 ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`${theme === "dark" ? darkthemeclass : lightthemeclass}`}
            placeholder="name@flowbite.com"
            name="email"
             value={user.email} onChange={handleChange}
            required
          />
           <p class="mt-2 text-sm text-red-600 dark:text-red-500">{err.emailError}</p>
        </div>
        <div className="mb-5 ">
          <label
            htmlFor="review"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Review
          </label>
          <input
            type="text"
            id="review"
            className={`${theme === "dark" ? darkthemeclass : lightthemeclass}`}
            placeholder="name@flowbite.com"
            name="review"
             value={user.review} onChange={handleChange}
            required
          />
           <p class="mt-2 text-sm text-red-600 dark:text-red-500">{err.reviewError}</p>
        </div>
        <div className="mb-5 ">
          <label
            htmlFor="imgURL"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image URL
          </label>
          <input
            type="url"
            id="imgURL"
            className={`${theme === "dark" ? darkthemeclass : lightthemeclass}`}
            placeholder="Image URL"
            name="imgURL"
             value={user.imgURL} onChange={handleChange}
            required
          />
           <p class="mt-2 text-sm text-red-600 dark:text-red-500">{err.imgURLError}</p>
        </div>
        <div className="mb-5">
          <label
            htmlFor="rating"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Rating
          </label>
          <select
            id="rating"
           className={`${theme === "dark" ? darkthemeclass : lightthemeclass}`}
            value={user.rating} onChange={handleChange} name="rating"
          >
         
            <option value="">Please Give Your Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
            <p class="mt-2 text-sm text-red-600 dark:text-red-500">{err.ratingError}</p>
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              defaultChecked
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 container mx-auto">
        <Card users={users} />
</div>

    </div>
  );
};

export default Form2;
