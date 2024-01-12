'use client'
export default function ButtonFilter (props) {
  const API_URL =  'http://localhost:3000/api'

  return (
    <button className=" bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl" onClick={()=>(console.log('me tocaste'))}>{props.name}</button>
  )
}

