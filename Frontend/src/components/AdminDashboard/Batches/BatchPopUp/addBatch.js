import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddBatch = () => {

  const [values, setValues] = useState({
    batchDes: '',
    batchStatus: '',
    batchDate: '',
    adminID: ''
  })

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/batchevent/", values)
      .then(res => {
        window.location.reload();
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

  return (
      <form onSubmit={handleAdd} class ="border-t-8 border-blue-600 w-96">
        <div className="space-y-12 ">
            < div className="border-b border-gray-900/10 pb-12 ">
            <h2 className="text-2xl mt-4 font-semibold leading-7 text-gray-900">Batch Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">.</p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            {/* <div className="sm:col-span-6">
              <label htmlFor="batchid" className="block text-sm font-medium leading-6 text-gray-900">
                Batch ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  value={values.batchID}
                //   onChange={e => setValues({...values, batchID: e.target.value})}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}



            <div className="sm:col-span-6">
              <label htmlFor="des" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  
                  onChange={e => setValues({ ...values, batchDes: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                Batch Status
              </label>
              <div className="mt-2">
                <select
                
                onChange={e => setValues({ ...values, batchStatus: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option disabled selected hidden>select status</option>
                  <option>Active</option>
                  <option>Frozen</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                Batch Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  
                  onChange={e => setValues({ ...values, batchDate: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            

            <div className="sm:col-span-6">
              <label htmlFor="adminid" className="block text-sm font-medium leading-6 text-gray-900">
                Admin ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  
                  onChange={e => setValues({ ...values, adminID: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create New Batch
          </button>
        </div>
        </div>
      </form>
  );
};

export default AddBatch;
