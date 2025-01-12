import React from 'react'

function LocationSearchPanel(props) {
 
  return (
    <div >
  
        {
        props.suggestions.map(function(elm, ind){
          return  <div onClick={() => {
              props.handleLocationSelect(elm, props.type);
            }} key={ind} className='flex gap-5 items-cente my-2 justify-start'>
          <h2 className='bg-[#eee] h-10 flex items-center justify-center w-20 rounded-full'><i className="ri-map-pin-line"></i></h2>
          <h4 className=' font-medium'>{elm}</h4>
         </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel
