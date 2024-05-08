import React from 'react'

const Marquee = ({imagesurls}) => {
  return (
    <div className="flex items-center w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
        {imagesurls.map(url=><img src={url} className=""/>)}
    </div>
  )
}

export default Marquee