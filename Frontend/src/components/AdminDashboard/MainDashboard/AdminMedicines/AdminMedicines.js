import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

function AdminMedicines () {

    const [users, setUsers] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8080/api/latestreorderlist")
            .then(response => {
                setUsers(response.data);
            })
      }
        useEffect(() => {
            fetchData();
        }, []);
    return (
        <div class="flex flex-col mt-8">
            <div class="overflow-x-auto rounded-lg">
                <div class="align-middle inline-block min-w-full">
                    <div class="shadow overflow-hidden sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Medicine Name
                                    </th>
                                    <th scope="col" class="pl-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quantity
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                {users.map((user) => {
                                    return(
                                        <tr key={user.reorderID}>
                                        <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                            <span class="font-semibold">{user.medicineName}</span>
                                        </td>
                                        <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                        {new Date(user.reorderDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </td>
                                        <td class="pl-12 whitespace-nowrap text-sm font-semibold text-gray-900">
                                            {user.currentQuantity}
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdminMedicines;