import React from "react";
import { useState, useEffect } from "react";
import EditPopup from "../Editpopup/EditPopup";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DeletePopUp from "../Editpopup/DeletePopUp";
import axios from "axios";
import Modal from "react-modal"

function CategoryTable () {

  const [users, setUsers] = useState([]);  
  const [userToDelete, setUsertoDelete] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8080/api/categoryevents")
            .then(response => {
                setUsers(response.data)
            })
    }
    useEffect(() => {
        fetchData()
    }, []);


    const [open, setOpen] = useState(false);
    const [eopen, esetOpen] = useState(false);
  
    const handleClickToOpen = (user) => {
      setUsertoDelete(user);
      setOpen(true);
    };
    
    const handleToClose = () => {
      setOpen(false);
    };

    const ehandleClickToOpen = () => {
        esetOpen(true);
      };
      
      const ehandleToClose = () => {
        esetOpen(false);
      };

    return(
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Category ID</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Category Name</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Description</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Status</th>
        <th scope="col" class="px-8 py-4 font-medium text-gray-900">Action</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      {users.map((user) => {
        return (
          <tr class="hover:bg-gray-50" key={user.categoryID}>
        <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="text-sm px-5">
            <div class="font-medium text-gray-700">{user.categoryID}</div>
          </div>
        </td>
        <td class="px-6 py-4">{user.categoryName}</td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              {user.categoryDes}
            </span>
          </div>
        </td>
        <td class="px-6 py-4">
        <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            user.categoryStatus === 'Frozen' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
            }`}
           >
          <span className={`h-1.5 w-1.5 ${
            user.categoryStatus === 'Frozen' ? 'rounded-full bg-red-600' : 'rounded-full bg-green-600'
          }`}
          >
          </span>
          {user.categoryStatus}
          </span>
        </td>
    
      
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
            <button onClick={ () => handleClickToOpen(user)}>
            <a x-data="{ tooltip: 'Delete' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </a>
            </button>
                                <Dialog open={open} onClose={handleToClose} >
                                            <DeletePopUp user={userToDelete}/>
                                </Dialog>
                                {/* <Modal isOpen={open} onRequestClose={handleToClose}>
                                    <DeletePopUp user={userToDelete} onClose={handleToClose} />
                                </Modal> */}

            <button  onClick={ehandleClickToOpen}>
            <a x-data="{ tooltip: 'Edite' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </a>
            </button>
                                <Dialog open={eopen} onClose={ehandleToClose} >
                                    <DialogContent>
                                    <EditPopup/>
                                    </DialogContent>
                                   
                                </Dialog>
          </div>
        </td>
      </tr>
        );
      })}
    </tbody>
  </table>
</div>
    )
}

export default CategoryTable;