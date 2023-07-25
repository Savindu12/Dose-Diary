import React from "react";
import axios from "axios";

function DeletePopUp ({user}) {

  const handleDelete = (categoryID) => {
    axios.delete('http://localhost:8080/api/categoryevent/' + categoryID)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err))
  }
    return (
        <div class="bg-white rounded-lg">
          <div class="w-96 border-t-8 border-red-600 flex">
            <div class="w-1/3 pt-6 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 bg-red-600 text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24">
                <path xmlns="http://www.w3.org/2000/svg" d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentcolor"></path>
              </svg>
            </div>
            <div class="w-full pt-9 pr-4">
              <h3 class="font-bold text-red-700">Delete Category?</h3>
              <p class="py-4 text-sm text-gray-400">Are you sure you want to delete this category? If you delete this category, you will permantly delete category details.</p>
            </div>
          </div>
      
          <div class="p-4 flex space-x-4">
            <button class="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</button>
            <button button onClick={() => handleDelete(user.categoryID)} class="w-1/2 px-4 py-3 text-center text-pink-100 bg-red-600 rounded-lg hover:bg-red-700 hover:text-white font-bold text-sm">Delete Category</button>
          </div>
        </div>
    )
}

export default DeletePopUp;