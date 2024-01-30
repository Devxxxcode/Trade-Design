import React from 'react';

const ErrorPage = ({message}) => {

  return (
    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen flex items-center justify-center fixed top-0 bottom-0 right-0 left-0 z-10 text-3xl font-bold text-white'>
      {message?message:"An Error Occured"}
    </div>
  );
};

export default ErrorPage;
