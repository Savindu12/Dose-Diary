import React from "react";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function StockOutNavBar () {
    return (
        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
        <div class="flex items-center justify-between mb-4">
            <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Stock Out Dashboard</span>
                <h3 class="text-base font-normal text-gray-500">Item Issue from Medicine Store</h3>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6 mb-3">
          <button
            type="submit"
            className="rounded-md bg-pink-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Select Batch
          </button>
        </div>
        </div>
        <div>
      <div className="mt-6 border-t border-gray-100">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Date</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0"> 
            <div className="grid grid-cols-2 gap-6">
            <span>From
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker']}
      >
        <DemoItem>
          <DatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
            </span>
          
             <span> To
             <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker']}
      >
        <DemoItem>
          <DatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
             </span>
            </div>
            </dd>
          </div>
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Batch Name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> Batch Name </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Category Name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md sm:col-span-2 border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  /></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Medicine Name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md sm:col-span-2 border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  /></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Existing Quantity</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">  65 </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Added Quantity</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md sm:col-span-2 border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  /></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">New Quantity</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> New Quantity</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Notes</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm sm:col-span-2 rounded-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 " placeholder="Your message..."></textarea>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div className="mt-6 flex items-center justify-end gap-x-6 mb-3">
          <button type="reset" className="text-lg font-semibold leading-6 text-gray-900 ">
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Issue Medicine
          </button>
        </div>
        </div>
    )
}

export default StockOutNavBar;