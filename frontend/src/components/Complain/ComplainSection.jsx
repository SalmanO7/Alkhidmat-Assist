import React from 'react'
import { Textarea } from '@material-tailwind/react'
import { LuImport  } from "react-icons/lu";


function ComplainSection() {



    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <div>
            <form className="px-4 mt-8 md:w-1/2 mx-auto">
                <div className="flex flex-wrap lg:w-w-2/3  -mx-2 mb-6">
                    <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full rounded-xl font-medium h-16 text-gray-700 border border-black py-3 px-5 leading-tight focus:border-sky-600 focus:outline-none"
                            id="grid-first-Subject"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <input
                            className="appearance-none block w-full rounded-xl font-medium h-16 text-gray-700 border border-black py-3 px-5 leading-tight focus:border-sky-600 focus:outline-none"
                            id="grid-last-Subject"
                            type="text"
                            placeholder="Email  "
                        />
                    </div>
                </div>

                <div className="flex flex-wrap   -mx-2 mb-6 ">
                    <div className="w-full  lg:w-full  px-2  mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full rounded-xl font-medium h-16 text-gray-700 border border-black py-3 px-5 leading-tight focus:border-sky-600 focus:outline-none"
                            id="grid-first-Subject"
                            type="text"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="w-full md:mt-6    lg:w-full   px-2">
                        <input
                            className="appearance-none block w-full rounded-xl font-medium h-16 text-gray-700 border border-black py-3 px-5 leading-tight focus:border-sky-600 focus:outline-none"
                            id="grid-last-Subject"
                            type="text"
                            placeholder="Phone"
                        />
                    </div>

                </div>
                <div className="relative mb-4 w-full">
    {/* FontAwesome Icon */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LuImport  className="text-gray-500 text-sm md:text-2xl lg:text-2xl  mb-12" />
    </div>

    {/* File Input (hidden) */}
    <input
        type="file"
        className="absolute inset-0 opacity-0 cursor-pointer"
        id="file-input"
    />

    {/* Label as Custom Button */}
    <label
        htmlFor="file-input"
        className="border-2 border-blue-600 border-dashed rounded-xl w-full h-32 flex justify-center items-center px-3 py-2 cursor-pointer focus:outline-none"
    >
        <span className="text-gray-500 mt-2 text-base md:text-xl">Drag & Drop to import</span>
    </label>
</div>





                <Textarea
                    placeholder="Message"
                    className="border border-black mb-4 w-full h-44 rounded-lg   px-3 py-2 focus:outline-none focus:border-sky-600"
                />

                <div className="flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="w-full sm:w-44 lg:w-[250px] bg-blue-500 h-11 border border-black rounded-xl font-bold text-white text-lg hover:bg-blue-400 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ComplainSection
