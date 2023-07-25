import react, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import AdminNavigate from './AdminNavigate/AdminNavigate';
import AdminTopBar from './AdminTopbar/AdminTopBar';
import AdminCards from './AdminCards/AdminCards';
import AdminMedicines from './AdminMedicines/AdminMedicines';
import AdminCharts from './AdminCharts/AdminCharts';
import { Link } from "react-router-dom";

function AdminHome () {
    return (
      <div>
         <div class="flex overflow-hidden bg-white pt-16">
            <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
               <main>
                  <div class="pt-6 px-4">
                     <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                        <AdminCharts/>
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                           <div class="mb-4 flex items-center justify-between">
                              <div>
                                 <h3 class="text-xl font-bold text-gray-900 mb-2">Latest Reorder Items</h3>
                                 <span class="text-base font-normal text-gray-500">List of latest reorder medicines</span>
                              </div>
                              <div class="flex-shrink-0">
                                 <Link to="/reorder" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</Link>
                              </div>
                           </div>
                           <AdminMedicines/>
                        </div>
                     </div>
                        <AdminCards/>
                     
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

export default AdminHome;