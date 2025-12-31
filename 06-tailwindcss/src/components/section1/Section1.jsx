import React from 'react'
import Nav from './Nav'
import Page1 from './Page1'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full '>
      <Nav />
      <Page1 users = {props.users}/>
    </div>
  )
}

export default Section1
