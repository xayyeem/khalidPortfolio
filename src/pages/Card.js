import React from 'react'


const Card = (props) => {
  return (
    <div>
        
<div class="max-w-sm m-4 hover:translate-y-4 hover:bg-[#21325E] hover:text-white transition-all mt-20 rounded-xl overflow-hidden shadow-lg">
  <a href={props.url} rel='link' >
  <img  class="w-full hover:scale-x-200 transition-all "  src={props.image} alt="Sunset in the mountains"/>
  </a>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{props.text}</div>
    
  </div>

</div>
    </div>
  )
}

export default Card