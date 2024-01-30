import React from 'react'
import { Spinner } from "@material-tailwind/react";

const Spinners = ({className="h-6 w-6 border border-5 ",color="blue"}) => {
  return (
    <div className='w-full flex justify-center'>
        <Spinner className={className} color={color} />
    </div>
  )
}

export default Spinners