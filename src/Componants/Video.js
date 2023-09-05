import React from 'react'
import './video.css'

export default function Video({title, value, channelname = "kunj", view = "2M", likes = 2, verified = false}) {

    // let verified = false;
    if(verified) console.log('yes')
  return (
    <div className='flowerbox'>
    <div className='flower'>
        
      <img className='image' src='https://w7.pngwing.com/pngs/428/197/png-transparent-pink-and-red-flowers-illustration-watercolour-flowers-drawing-flower-watercolor-painting-flower-arranging-artificial-flower.png' alt='not present'></img>
      <h3>{title}</h3>
      <h4>{channelname} {verified&&'✅'}</h4>
      <p> view {view} <span>likes : {likes} </span></p>
    </div>
     
    </div>
  )
}
