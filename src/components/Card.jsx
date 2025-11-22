import React from "react";

const Card = ({users,onDelete}) => {
  return (
    <>
    {
      users.map((curEle)=>{
        const stars = "⭐".repeat(curEle.rating)
        return(
          <div className="mt-5 flex flex-wrap">
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow border dark:border-gray-700 p-4 mx-auto mb-6">
            <img src={curEle.imgURL} className="w-24 h-24 rounded-full shadow-lg" />
            <h5 className="text-xl font-medium dark:text-white text-gray-900">
            {curEle.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            {curEle.review}
            </span>
            <p className="text-yellow-400 text-xl">{stars}</p>
            <button
  onClick={() => onDelete(curEle.email)}
  className="mt-3 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900 transition"
>
  Delete
</button>

            </div>
           
          </div>
        )
      })
    }
    </>
  );
};

export default Card;
