import React from 'react'
import {useState} from 'react'

function SearchIng() {
    const [input,setInput] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div>

<form onSubmit={submitHandler}>   
    {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
    <div class="relative">
        {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div> */}
        <div className='flex flex-row justify-around m-2'>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="search" id="default-search" className="block w-1/2 p-4 pl-10 text-sm text-white     border border-gray-300 rounded-lg bg-green-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <div className='flex m-2 justify-end'>
        <button type="submit" className="text-white font-bold absolute bottom-2.5 bg-green-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2">Search</button>
        </div>
        </div>
    </div>
</form>

    </div>
  )
}

export default SearchIng