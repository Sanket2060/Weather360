import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

const ContactUs = () => {
  const onSubmit=(data)=>{
    console.log(data);
  }
  const schema=yup.object().shape({
    name:yup.string().required("Your name is required"),
    email:yup.string().email("Provide a valid email").required("Email is required"),
    messages:yup.string().required("Provide a message")
  })
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input {...register("name")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
            <div className="errordiv">{errors.name?.message}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input {...register("email")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
             <div className="errordiv">{errors.email?.message}</div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea {...register("messages")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="messages"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
             <div className="errordiv">{errors.messages?.message}</div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
