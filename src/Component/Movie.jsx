import React from 'react'
var releasedYear=2010;
const Movie = (props) => {
  return (
    <>
    
    <div>
        <div className='bg-purple-400'>Title:{props.title}</div>
        <div className='bg-blue-300'>TIme:{props.duration}</div>
        <div className='bg-pink-500'>Released Date:{props.date}</div>
        {(releasedYear <= props.date ? "movie is released" : "movie is not released")}
    </div>
    <h1
    style={{
      color:'red',
      width:'100px',
      fontSize:'20px',
    }}>
      inline CSS
    </h1>

    </>
  )
}

export default Movie