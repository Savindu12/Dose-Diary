import React from "react";
import AdminCharts from "../MainDashboard/AdminCharts/AdminCharts";
import AdminMedicines from "../MainDashboard/AdminMedicines/AdminMedicines";
import Example from "./BatchesPieChart/PieChart";
import BatchTable from "./BatchesTable/BatchTable";
import DialogContent from "@material-ui/core/DialogContent";
import { useState } from "react";
import AddBatch from "./BatchPopUp/addBatch";
import Dialog from "@material-ui/core/Dialog";
import BatchChart from "./BatchesPieChart/PieChart";


export default function Batches () {
   
  const [open, setOpen] = useState(false);
  const [eopen, esetOpen] = useState(false);

  const handleClickToOpen = () => {
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

    return (
        <div>
        <div class="flex overflow-hidden bg-white pt-16">
           <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
           <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
              <main>
                 <div class="pt-6 px-4">
                    <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                       <BatchChart/>
                       <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                          <div class="mb-4 flex items-center justify-between">
                             <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Latest Issued Medicines</h3>
                                <span class="text-base font-normal text-gray-500">This is a list of latest Issued Items</span>
                             </div>
                             <div class="flex-shrink-0">
                                <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                             </div>
                          </div>
                          <AdminMedicines/>
                       </div>
                    </div>
                       {/* <AdminCards/> */}
                    <div class="grid grid-cols-1 2xl:grid-cols-1 xl:gap-4 my-4">
                       <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                          <div class="flex items-center justify-between mb-4">
                             <h3 class="text-xl font-bold leading-none text-gray-900">Batch Overview</h3>
                             <div class = "grid grid-cols-1 3xl:grid-cols-1 ">
                             <button onClick={handleClickToOpen} class="text-sm font-medium text-end text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                             Create New Batch
                             </button>
                             <Dialog open={open} onClose={ handleToClose} >
                             <DialogContent>
                                   <AddBatch/>
                                   </DialogContent>
                                 </Dialog>
                             </div>
                          </div>
                          <div class="flow-root">
                             <BatchTable/>
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