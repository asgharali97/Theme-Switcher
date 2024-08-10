            // 
import React from "react";

const Card = () => {
  return (
    <>
     <div className="w-full rounded-md border shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZhsRO3JMxvU_I3hthr29vLYYdE8zCtjC2w&s"
        alt="Laptop"
        className="h-[200px] w-[26vw] m-3 rounded-md object-cover overflow-hidden dark:shadow dark:shadow-gray-400"
        />
      <div className="p-4">
        <h1 className="text-lg font-semibold dark:text-white">Game-changing MacBook Pro with M1 Pro and M1 Max</h1>
        <p className="mt-3 text-lg text-gray-600 font-medium  dark:text-white">
         $999
        </p>
        <button
          type="button"
          className="mt-4 rounded-lg bg-black px-6 py-3 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-gray-500 dark:border-gray-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
    </>
  );
};

export default Card;
