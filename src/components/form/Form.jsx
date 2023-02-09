import React, { useState } from 'react'

export default function Form() {
    cosnt [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        
    })

    function handleSubmit(event){
      event.preventDefault()
      
    }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Beer name</label>
      <input id='name' type="text" placeholder='Beer name'/>
      <label htmlFor="tagline">Beer tagline</label>
      <input id='tagline' type="text" placeholder='Beer tagline'/>
      <label htmlFor="description">Beer description</label>
      <input id='description' type="textarea" placeholder='Beer description' />
      <button>Update</button>
    </form>
  )
}
