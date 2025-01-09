import React from 'react'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'





function ApplicationSection() {
    return (
        <div className=''>
            <div class="max-w-md mx-auto bg-white overflow-hidden md:max-w-full">
                <div class="md:flex mt-8">
                    <div class="bg-black">
                        <img className='h-48 w-56 object-cover rounded ml-14  md:h-full md:w-96' src={image1} alt="" />
                    </div>
                    <div class="p-9">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                        <div className='mt-4'>
                            <a href="" className='text-blue-500'>Location</a>
                            <div className='flex justify- items-center'>
                                <p>P E C H S Foundation</p>
                                <button className='w-28 font-sans rounded-sm  h-8 bg-blue-500 ml-auto'>Progress</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-full">
                <div className="md:flex mt-8">
                    <div className="md:shrink-0">
                        <img className='h-44 w-56 object-cover rounded ml-14  md:h-full md:w-96' src={image2} alt="" />
                    </div>
                    <div class="p-9">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                        <div className='mt-4'>
                            <a href="" className='text-blue-500'>Location</a>
                            <div className='flex justify-between items-center'>
                                <p>P E C H S Foundation</p>
                                <button className='w-28 font-sans rounded-sm h-8 bg-blue-500 ml-auto'>Progress</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-md mx-auto bg-white overflow-hidden md:max-w-full">
                <div className="md:flex mt-8">
                    <div classNmaeName="md:shrink-0">
                        <img classNameName='h-44 w-56 object-cover rounded   ml-14  md:h-full md:w-96' src={image3} alt="" />
                    </div>
                    <div className="p-9">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                        <div classNameName='mt-4'>
                            <a href="" classNameName='text-blue-500'>Location</a>
                            <div className='flex justify-between items-center'>
                                <p>P E C H S Foundation</p>
                                <button className='w-28 font-sans rounded-sm h-8 bg-blue-500 ml-auto'>Progress</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationSection









