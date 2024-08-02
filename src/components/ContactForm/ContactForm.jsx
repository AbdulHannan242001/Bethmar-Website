import React from 'react';

const ContactForm = ({ onClose }) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
            <div className='fixed shadow-2xl top-1/2 left-1/2 md:top-2/3 md:left-[85%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 w-[400px] bg-moving-gradient3'>
                <h2 className='text-2xl mb-4 font-oswald text-white'>Contact Us</h2>
                <form>
                    <div className='flex flex-row justify-between'>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-300'>Full Name</label>
                            <input type='text' className='text-xs mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-primary-light' placeholder='Enter Full Name' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-300'>Email</label>
                            <input type='email' className='text-xs mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-primary-light' placeholder='Your Email Address' />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-300'>Message</label>
                        <textarea className='text-xs mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-primary-light' placeholder='Any questions?' />
                    </div>
                    <div className='flex justify-end'>
                        <button type='button' onClick={onClose} className='mr-2 py-2 px-4 border-gray-100 border text-white text-sm'>Cancel</button>
                        <button type='submit' className='py-2 px-4 bg-accentRed-dark hover:bg-accentRed transition-colors duration-300 text-white text-sm'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
