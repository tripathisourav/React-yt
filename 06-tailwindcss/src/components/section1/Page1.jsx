import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1 = (props) => {
  return (
    <div className='pt-16 pb-16 flex gap-10 items center px-18 h-[90vh] '>
      <Left />
      <Right users = {props.users}/>
    </div>
  )
}

export default Page1
