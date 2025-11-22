import React, { useState } from "react";
import Card from "./Card";

const ProductPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    review: "",
    imgURL: "",
    rating: "",
  });

  const [err, setErr] = useState({});
  const [users, setUsers] = useState([]);
  const handleDelete=(email)=>{
    setUsers(users.filter((u)=>u.email != email))
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name + "Error"]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errObj = {};

    if (user.name.trim() === "") errObj.nameError = "Enter Name";
    if (user.email.trim() === "" || !emailRegex.test(user.email))
      errObj.emailError = "Enter Valid Email";
    if (user.review.trim() === "")
      errObj.reviewError = "Give a Review";
    if (user.imgURL.trim() === "")
      errObj.imgURLError = "Enter Image URL";
    if (user.rating === "")
      errObj.ratingError = "Give Rating";

    setErr(errObj);

    if (Object.keys(errObj).length > 0) return;

    setUsers([...users, user]);

    setUser({
      name: "",
      email: "",
      review: "",
      imgURL: "",
      rating: "",
    });
  };

  return (
    <div className="dark bg-gray-900 min-h-screen pb-20">
      {/* PRODUCT SECTION */}
      <div className="container mx-auto px-5 py-10 text-white">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* PRODUCT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=80"
            alt="Laptop"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />

          {/* PRODUCT DETAILS */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">MacBook Pro M2</h1>
            <p className="text-gray-300 mb-4 text-lg">
              Supercharged performance. Stunning Retina display.
              Ultra-smooth editing, coding, and multitasking.
            </p>
            <p className="text-3xl font-bold mt-4 text-blue-400">
              ₹1,59,999
            </p>

            <button className="mt-6 px-6 py-3 text-lg bg-blue-600 rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* REVIEW FORM */}
      <h1 className="text-white text-4xl text-center my-10 font-semibold">
        Write a Review
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="text-white">Name</label>
          <input
            className="w-full p-2 rounded bg-gray-700 text-white mt-1"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <p className="text-red-400 text-sm">{err.nameError}</p>
        </div>

        <div className="mb-4">
          <label className="text-white">Email</label>
          <input
            className="w-full p-2 rounded bg-gray-700 text-white mt-1"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <p className="text-red-400 text-sm">{err.emailError}</p>
        </div>

        <div className="mb-4">
          <label className="text-white">Review</label>
          <input
            className="w-full p-2 rounded bg-gray-700 text-white mt-1"
            name="review"
            value={user.review}
            onChange={handleChange}
          />
          <p className="text-red-400 text-sm">{err.reviewError}</p>
        </div>

        <div className="mb-4">
          <label className="text-white">Image URL</label>
          <input
            className="w-full p-2 rounded bg-gray-700 text-white mt-1"
            name="imgURL"
            value={user.imgURL}
            onChange={handleChange}
          />
          <p className="text-red-400 text-sm">{err.imgURLError}</p>
        </div>

        <div className="mb-4">
          <label className="text-white">Rating</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white mt-1"
            name="rating"
            value={user.rating}
            onChange={handleChange}
          >
            <option value="">Select Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
          <p className="text-red-400 text-sm">{err.ratingError}</p>
        </div>

        <button className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700">
          Submit Review
        </button>
      </form>

      {/* REVIEW CARDS */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6">
        <Card users={users} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default ProductPage;
