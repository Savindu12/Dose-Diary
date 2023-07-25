import React from "react";
import dayjs from 'dayjs';
import { useState, useEffect } from "react";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from "axios";

function StockInNavBar () {

  const [existingQuantity, setExistingQuantity] = useState(0);
  const [addedQuantity, setAddedQuantity] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);

    const [batchnames, setBatchnames] = useState([]);
    const [quantity, existQuantity] = useState();
    const [categorynames, setCategorynames] = useState([]);
    const [medicinenames, setMedicinenames] = useState([]);
    const [values, setValues] = useState ({
      StockInDate: '',
      Batchname: '',
      categoryName: '',
      subCategoryName: '',
      medicineName: '',
      existingQuantity: '',
      addedQuantity: '',
      notes: ''
    })

    const handleAddedQuantityChange = (e) => {
      setValues({ ...values, addedQuantity: e.target.value })
      const addedQuantityValue = parseInt(e.target.value);
      setAddedQuantity(addedQuantityValue);
      setNewQuantity(existingQuantity + addedQuantityValue);
    };

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/stockin/", values)
      .then(res => {
        window.location.reload();
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

    const fetchData = () => {
      axios.get("http://localhost:8080/api/stockbatches")
          .then(response => {
            const names = response.data.map(item => item.batchDes);
            setBatchnames(names);
          })
    }

    const fetchCategoryData = () => {
      axios.get("http://localhost:8080/api/stockcategories")
          .then(response => {
            const names = response.data.map(item => item.categoryName);
            setCategorynames(names);
          })
    }

    const fetchMedicineData = () => {
      axios.get("http://localhost:8080/api/stockmedicines")
          .then(response => {
            const names = response.data.map(item => item.medicineName);
            setMedicinenames(names);
          })
    }

    const fetchExistingQuantity = () =>{
      axios.get("http://localhost:8080/api/existquantity/" + 1)
      .then(response => {
        const existquantity = response.data[0].existingQuantity;
        existQuantity(existquantity);
      })
    }

    useEffect(() => {
        fetchData()
        fetchCategoryData()
        fetchMedicineData()
        fetchExistingQuantity ()
    }, []);

    return (
      <form onSubmit={handleAdd}>
<div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
        <div class="flex items-center justify-between mb-4">
            <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Stock In Dashboard</span>
                <h3 class="text-base font-normal text-gray-500">Restock Medicine Store</h3>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6 mb-3">
          {/* <button
            type="submit"
            className="rounded-md bg-pink-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Select Batch
          </button> */}
        </div>
        </div>
        <div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Stock In Date</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">  
                <input
                  type="date"
                  
                  onChange={e => setValues({ ...values, StockInDate: e.target.value })}
                  className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
    </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Batch Name</dt>
            <dd>
              <select
                onChange={e => setValues({ ...values,  Batchname: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
        <option value="" disabled selected>Select Batch</option>
      {batchnames.map(batchDes => (
          <option key={batchDes}>{batchDes}</option>
        ))}
                </select>
            </dd>
          </div>
          
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Category Name</dt>
            <dd>
              <select
                onChange={e => setValues({ ...values, categoryName: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
        <option value="" disabled selected>Select Category</option>
      {categorynames.map(categoryName => (
          <option key={categoryName}>{categoryName}</option>
        ))}
                </select>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Medicine Name</dt>
            <dd>
              <select
                onChange={e => setValues({ ...values, medicineName: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
        <option value="" disabled selected>Select Medicine</option>
      {medicinenames.map(medicineName => (
          <option key={medicineName}>{medicineName}</option>
        ))}
                </select>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Existing Quantity</dt>
            <dd className="mt-1 text-sm pl-2 leading-6 text-gray-700 sm:col-span-2 sm:mt-0" >  {quantity} </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Added Quantity</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">  
            <input
                    id="text"
                    name="text"
                    type="text"
                    onChange={handleAddedQuantityChange}
                    autoComplete="text"
                    className="block w-96 rounded-md sm:col-span-2 border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  /></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">New Quantity</dt>
            <dd className="mt-1 text-sm pl-2 leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {newQuantity}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Notes</dt>
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
            Stock In Medicine
          </button>
        </div>
        </div>
      </form>
        
    )
}

export default StockInNavBar;