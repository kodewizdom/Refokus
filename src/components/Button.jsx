import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className="min-w-20 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center gap-4">
        <span className="text-sm font-normal text-zinc-800">Get Started</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button