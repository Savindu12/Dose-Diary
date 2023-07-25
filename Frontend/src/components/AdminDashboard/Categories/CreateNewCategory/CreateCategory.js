import React from "react";
import { useState } from "react";
import dayjs from 'dayjs';
import axios from "axios";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function Createcategory () {
  const [values, setValues] = useState({
    categoryName: '',
    categoryDes: '',
    categoryStatus: '',
  })
  
  const handleAdd = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/categoryevent/", values)
      .then(res => {
        window.location.reload();
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

    return (
      <form onSubmit={handleAdd}>
<div class = "w-96">
        <div className="px-4 sm:px-0">
          <h1 className="text-xl font-semibold leading-7 text-gray-900">Category Information</h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Category Details & Application</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Category Name</dt>
               <input
                    id="text"
                    name="text"
                    required
                    onChange={e => setValues({ ...values, categoryName: e.target.value })}
                    type="text"
                    autoComplete="text"
                    className="block w-full rounded-md sm:col-span-2 border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
              <textarea 
              id="message" 
              required
              onChange={e => setValues({ ...values, categoryDes: e.target.value })}
              rows="4" class="block p-2.5 w-full text-sm sm:col-span-2 rounded-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 " placeholder="Your message..."></textarea>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">    <label htmlFor="status">
                Category Status
              </label></dt>
        
              <div className="mt-2">
                <select
                onChange={e => setValues({ ...values, categoryStatus: e.target.value })}
                  className="block w-64 rounded-md border-0 py-1.5 h-42 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option disabled selected hidden>select status</option>
                  <option>Active</option>
                  <option>Frozen</option>
                </select>
              </div>
            </div>
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Created Date</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">   
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={['DatePicker']}
                >
                <DemoItem>
                <DatePicker defaultValue={dayjs('2022-04-17')} />
                  </DemoItem>
                </DemoContainer>
                </LocalizationProvider>
             </dd>
            </div> */}
          </dl>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6 mb-3">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900 ">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create New Category
          </button>
        </div>
      </div>
      </form>
        
    )
}

export default Createcategory;