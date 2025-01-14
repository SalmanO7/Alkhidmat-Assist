import { Textarea } from '@material-tailwind/react'
import React from 'react'
import map from '../../assets/map.png'
import location from '../../assets/location.png'
import text1 from '../../assets/text1.png'
import mail from '../../assets/mail.png'



function ContactSection() {


  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <>
      <div className="flex flex-col md:flex-row mt-10 items-center justify-center">
        <form className="w-full px-2  max-w-lg md:w-1/2 md:mr-5">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
              <input className="appearance-none block w-full rounded-xl font-medium h-16 text-gray-700 border border-black py-3 px-4 leading-tight focus:border-gray-500 focus:outline-none " id="grid-first-name" type="text" placeholder="Name" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input className="appearance-none block w-full rounded-xl font-medium border border-black text-gray-700 py-3 h-16 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input className="appearance-none block w-full rounded-xl font-medium border border-black text-gray-700 h-16 py-3 px-4 mb-5 leading-tight focus:outline-none  focus:border-gray-500" id="grid-password" type="text" placeholder="Subject" />
            </div>
            <div className="w-full px-3">
              <input className="appearance-none block w-full rounded-xl font-medium border border-black text-gray-700 h-16 py-3 px-4 mb-5 leading-tight focus:outline-none focus:border-gray-500" id="grid-phone" type="text" placeholder="Phone" />
            </div>
          </div>




          <Textarea placeholder="Message" className=" border border-black mb-4 w-full" />

          <div className="flex justify-center">
            <button onClick={handleSubmit} className="w-64 mt-2 bg-blue-500 h-11 border border-black rounded-xl font-bold text-white text-lg">Submit</button>
          </div>
        </form>

        {/* Map Section */}
        <div className="flex justify-center  mt-10   md:mt-0">
          <img className="w-full md:w-[560px] mx-7 " src={map} alt="Map" />
        </div>
      </div>
      <div class="sm:bg-white  max-w-4xl mx-auto p-4   ">
        <h1 class="text-xl sm:text-2xl font-bold text-center mb-6">Want To Contact Us?</h1>


        <div class="flex flex-wrap flex-col md:flex-row justify-between items-center gap-6">


          <div class="flex items-center space-x-2 w-full md:w-auto">
            <img class="w-12" src={location} alt="Location Icon" />
            <span class="text-lg">
              Alkhidmat Foundation Headoffice
            </span>
          </div>


          <div class="flex items-center space-x-2 w-full md:w-auto">
            <img class="w-12" src={mail} alt="Mail Icon" />
            <h2 class="text-lg">info@gmail.com</h2>
          </div>


          <div class="flex items-center space-x-2 w-full md:w-auto">
            <img class="w-8" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="Phone Icon" />
            <h2 class="text-lg">+92 42 3802 0222</h2>
          </div>
        </div>
      </div>


    </>
  )
}

export default ContactSection;
