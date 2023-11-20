'use client'
import Image from 'next/image';
import profilePic from '../components/profilePic.jpg';
import { useState, useEffect } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { IoClose } from "react-icons/io5";

export default function Modal({ isVisible, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  useEffect(() => {
    const phoneInput = intlTelInput(document.querySelector("#phone"), {
      initialCountry: "auto",
      geoIpLookup: function (success, failure) {
        fetch("https://ipinfo.io/json?token=YOUR_TOKEN_HERE")
          .then(response => {
            if (!response.ok) {
              throw new Error("Failed to get user location");
            }
            return response.json();
          })
          .then(jsonResponse => {
            success(jsonResponse.country);
          })
          .catch(error => {
            failure(error);
          });
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    phoneInput.setNumber("+52 ");
  }, []);

  return (
    <div className={`fixed inset-0 Obg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ${isModalOpen ? 'visible' : 'hidden'}`} id='wrapper' onClick={handleClose}>
      <div className="w-[600px] m-8 flex flex-col">
        <div className="bg-white  p-4 rounded-md">
          <button className="text-black text-xl" onClick={() => onClose()}><IoClose /></button>
          <div className="flex flex-col items-center pb-4">
            <Image className="rounded-full"
              src={profilePic}
              alt="Picture of the author"
              width={80}
              height={80}
            />
            <h1 className='text-gray-800 font-semibold text-lg py-3'>Subscribe to kclashes_mex</h1>
            <div>
              <h2 className='text-black font-light text-center text-sm pb-3'> Sign up to get exclusive email updates directly from me. </h2>
            </div>
            <div className='flex flex-col p-8 border-2 border-gray-800 rounded-3xl p-[24px]'>
              <div className='w-[515px] h-[48px] py-[5px] border-2 border-gray-800 rounded-3xl'>
                <input className='bg-transparent text-black focus:outline-none w-[511px] h-[32px] pl-[16px]'
                  type="text"
                  placeholder="Full Name"
                  name="name"
                />
              </div>
              <div className='w-[515px] h-[48px] py-[5px] mt-4 border-2 border-gray-800 rounded-3xl'>
                <input className='bg-transparent text-black focus:outline-none w-[511px] h-[32px] pl-[16px]'
                  type="text"
                  placeholder="Email"
                  name="email" />
              </div>
              <div className='w-[515px] h-[48px] py-[5px] mt-4 border-2 border-gray-800 rounded-3xl'>
                <input
                  className='bg-transparent text-black focus:outline-none w-[511px] h-[32px] pl-[16px]'
                  type="tel"
                  placeholder="Whatsapp"
                  name="phone"
                  id="phone"
                />
              </div>
              <button className='w-[515px] h-[48px] py-[5px] mt-4 border-2 border-gray-800 rounded-3xl bg-gray-800 text-white' >Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}