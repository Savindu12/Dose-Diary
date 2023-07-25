import React from "react";
import ReorderView from "./ReorderView/ReorderView";

function Reorder () {
    return ( 
        <div>
        <div class="flex overflow-hidden bg-white pt-16">
           <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
           <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
              <main>
                 <div class="pt-6 px-4">
                    <div class="w-full">
                    </div>
                       <ReorderView/>
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

export default Reorder;