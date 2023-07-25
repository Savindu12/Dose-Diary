import React from "react";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import UserTable from "./UserTable/UserTable";
import CreateMedicine from "./UserTable/createMedicine";

function Users () {
   const [open, setOpen] = useState(false);
   const handleClickToOpen = () => {
      setOpen(true);
    };
    
    const handleToClose = () => {
      setOpen(false);
    };

    return (
        <div>
        <div class="flex overflow-hidden bg-white pt-16">
           <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
           <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
              <main>
                 <div class="pt-6 px-4">
                    <div class="grid grid-cols-1 2xl:grid-cols-1 xl:gap-4 my-4">
                       <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                          <div class="flex items-center justify-between mb-4">
                             <h3 class="text-xl font-bold leading-none text-gray-900">Medicine Overview</h3>
                             <div class = "grid grid-cols-1 3xl:grid-cols-1">
                             <button onClick={handleClickToOpen} class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                             Add new Medicine
                             </button>
                             <Dialog open={open} onClose={ handleToClose} >
                             <DialogContent>
                                   <CreateMedicine/>
                                   </DialogContent>
                                 </Dialog>
                             </div>
                          </div>
                          <div class="flow-root">
                             <UserTable/>
                          </div>
                       </div>
                    </div>
                 </div>
              </main>
   
              <p class="text-center text-sm text-gray-500 my-10">
                 &copy; 2023 <a href="#" class="hover:underline" target="_blank">NobleAged</a>. All rights reserved.
              </p>
           </div>
        </div>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
     </div>
    )
}

export default Users;