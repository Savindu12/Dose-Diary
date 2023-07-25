import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function ReorderTable () {

  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:8080/api/reorderlist")
        .then(response => {
            setUsers(response.data);
        })
  }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mt-10">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">Reorder ID</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">Medicine Name</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">Category Name</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">Current Quantity</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">Reorder Date</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {users.map((user) => {
              return(
<tr class="hover:bg-gray-50" key ={user.reorderID}>
              <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div class="text-sm">
                  <div class="font-medium text-gray-700 pl-8">{user.reorderID}</div>
                </div>
              </th>
              <td class="px-6 py-4">{user.medicineName}</td>
              <td class="px-6 py-4">{user.categoryName}</td>
              <td class="pl-20">{user.currentQuantity}</td>
              <td class="px-6 py-4">  {new Date(user.reorderDate).toLocaleDateString('en-US')}</td>
              <td class="px-6 py-4">
                <span
                  class={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold ${
                    user.reorderAction === 'Out of Stock' ? 'bg-yellow-50 text-yellow-600' :
                    user.reorderAction === 'immediate' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                    }`}
                >
                    <span className={`h-1.5 w-1.5 ${
  user.reorderAction === 'Out of Stock' ? 'rounded-full bg-yellow-600' :
  user.reorderAction === 'immediate' ? 'rounded-full bg-red-600' :
  'rounded-full bg-green-600'
}`}>
</span>
{user.reorderAction}
          </span>
              </td>
            </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}

export default ReorderTable;