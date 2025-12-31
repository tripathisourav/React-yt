import React from 'react'
import Card from './Card'

const Right = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-6 flex flex-nowrap gap-5 overflow-x-auto transition-all-ease-0.3s'>
      {props.users.map((e, idx) => {
        return <Card id = {idx} user = {e}/>
      })}
    </div>
  )
}

export default Right
