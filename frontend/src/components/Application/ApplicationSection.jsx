import React from 'react'
import image1 from '../../assets/image1.jpg'



function ApplicationSection() {
    return (
        <div>
            <div className='flex flex-col mt-14 ml-14'>
                <img className='w-96 border-sky-500 rounded-lg' src={image1} alt="Image description" />
                <h1 className='mt-4'>Description</h1>
                <div className='flex flex-col  mt-2'>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A temporibus corrupti, quod eveniet quo sint vitae! Eos consequatur.</span>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A temporibus corrupti, quod eveniet quo sint vitae! Eos consequatur.</span>
                    <span>Lorem ipsum dolor sit.</span>
                </div>
                <div className='mt-5'>
                    <a href="" className='text-blue-500'>Location</a>
                </div>
                <button className='flex bg-blue-500 mt-5  w-24'>
                    In Progress
                </button>
            </div>
            <div className='flex flex-col mt-14 ml-14'>
                <img className='w-96 border-sky-500 rounded-lg' src={image1} alt="Image description" />
                <h1 className='mt-4'>Description</h1>
                <div className='flex flex-col mt-2'>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A temporibus corrupti, quod eveniet quo sint vitae! Eos consequatur.</span>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A temporibus corrupti, quod eveniet quo sint vitae! Eos consequatur.</span>
                    <span>Lorem ipsum dolor sit.</span>
                </div>
                <div className='mt-4'>
                    <a href="" className='text-blue-500'>Location</a>
                </div>
                <button className='flex bg-blue-500 text-white mt-4 py-2 px-4 rounded'>
                    In Progress
                </button>
            </div>
            <div className='flex flex-col mt-14 ml-14'>
                <img className='w-96 border-sky-500 rounded-lg' src={image1} alt="Image description" />
                <h1 className='mt-4'>Description</h1>
                <div className='flex flex-col mt-2'>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A temporibus corrupti, quod eveniet quo sint vitae! Eos consequatur.</span>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A temporibus corrupti, quod eveniet quo sint vitae! Eos consequatur.</span>
                    <span>Lorem ipsum dolor sit.</span>
                </div>
                <div className='mt-4'>
                    <a href="" className='text-blue-500'>Location</a>
                </div>
                <button className='flex bg-blue-500 text-white mt-4 py-2 px-4 rounded'>
                    In Progress
                </button>
            </div>
        </div>
    )
}

export default ApplicationSection




















// import React from 'react';
// import image1 from '../../assets/image1.jpg';

// const Card = () => {
//   return (
//     <div className="flex flex-col mt-14 ml-14">
//       <img className="w-96 border-sky-500 rounded-lg" src={image1} alt="Image description" />
//       <h1 className="mt-4">Description</h1>
//       <div className="flex flex-col mt-2">
//         <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A temporibus corrupti, quod eveniet quo sint vitae! Eos consequatur.</span>
//         <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A temporibus corrupti, quod eveniet quo sint vitae! Eos consequatur.</span>
//         <span>Lorem ipsum dolor sit.</span>
//       </div>
//       <div className="mt-4">
//         <a href="" className="text-blue-500">Location</a>
//       </div>
//       <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded">In Progress</button>
//     </div>
//   );
// };

// function ApplicationSection() {
//   return (
//     <div>
//       <Card />
//       <Card />
//     </div>
//   );
// }

// export default ApplicationSection;
