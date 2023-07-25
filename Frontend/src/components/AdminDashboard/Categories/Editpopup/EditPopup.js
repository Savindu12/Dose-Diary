import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PieChart from '../../Batches/BatchesPieChart/PieChart'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditPopup (){

  const { categoryID } = useParams();

  const [categoryName, setCategoryName] = useState('');
  const [categoryDes, setCategoryDes] = useState('');
  const [categoryStatus, setCategoryStatus] = useState('');
  const [categoryDate, setCategoryDate] = useState('');
  const [adminID, setAdminID] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/categoryevent/' + {categoryID})
      .then(res => {
        setCategoryName(res.data[0].categoryName);
        setCategoryDes(res.data[0].categoryDes);
        setCategoryStatus(res.data[0].categoryStatus);
      })
      .catch(err => console.log(err));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('categoryID:', categoryID);
    console.log('categoryName:', categoryName);
    console.log('categoryDes:', categoryDes);
    console.log('categoryStatus:', categoryStatus);

    axios.put('http://localhost:8080/api/categoryevent/' + 0, 
    {categoryID, categoryName, categoryDes, categoryStatus})
    .then(res => {
      window.location.reload();
      console.log(res.data)
    })
    .catch(err => console.log(err));
  }

    const [open, setOpen] = useState(false);
    
    const handleToClose = () => {
      setOpen(false);
    };

    return (
        <form class="border-t-8 border-blue-600 w-96">
        <div className="space-y-12 " onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-12 ">
            <h2 className="text-2xl mt-4 font-semibold leading-7 text-gray-900">Category Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">.</p>
  
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-gray-900">
                  Category name 
                </label>
               
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder= {categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                <label htmlFor="text" className="block text-lg font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="text"
                    placeholder={categoryDes}
                    onChange={(e) => setCategoryDes(e.target.value)}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">
                  Status
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    value={categoryStatus}
                    onChange={(e) => setCategoryStatus(e.target.value)}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Active</option>
                    <option>Frozen</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900 " onClick={handleToClose}>
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update Category
          </button>
        </div>
      </form>
    )
}

export default EditPopup;