import React from 'react'

const Footer = () => {
  return (
    <div className='bg-zinc-900 w-full'>
        <div className="max-w-screen-xl mx-auto py-7 flex items-center justify-between">
            <div className='flex gap-8'>
                {["Privacy Policy","Cookie Policy","Impressum","Terms","Webflow Agency"].map((item, index)=><p key={index} className="text-zinc-500 text-sm">{item}</p>)}
            </div>
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"/>
        </div>
    </div>
  )
}

export default Footer