import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const arr = 
  [
    {
      img: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Innovative software engineer building scalable applications and leading cutting-edge digital transformation initiatives.',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1587272114422-ec88be13ab1a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Compassionate physician dedicated to patient care, diagnostics, and advancing modern healthcare practices.',
      tag: 'Underserved '
    },
    {
      img: 'https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Strategic business manager driving team performance, organizational growth, and effective decision-making.',
      tag: 'Underbanked'
    }
  ]

  return (
    <div className='h-screen bg-white'>
      <Section1 users = {arr}/>
      <Section2 />
    </div>
  )
}

export default App
