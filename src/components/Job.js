'use client'
import CardJobs from "./Card_jobs"
import { useEffect, useState } from "react"

export default function Job() {
  // const API_URL = 'http://localhost:3000/api'

  const [items, setItems] = useState({
    allJobs: [],
    filterJobs: []
  })

  useEffect( ()=> {
    fetch('api')
      .then(response => response.json())
      .then(data => setItems({
        allJobs: data.data.results,
        filterJobs: data.data.results,
      }))
    }, [])


  const filterItems = (e) => {
    e.preventDefault()
    const event = e.target.value
    // console.log(event)

    if(event !== 'ALL') {
      setItems({
        ...items,
        allJobs: items.filterJobs.filter(item => item.category === event)
      })
    } else{
      setItems({
        ...items,
        allJobs: items.filterJobs
      })

    }
  }

  return (
    <>
      <div className="flex flex-wrap justify-evenly m-auto w-full xl:w-1/2 py-5 text-sm">
        <button className=" bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl" value="ALL" onClick={filterItems}>Todos</button>
        <button className=" bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl" value="ecommerce" onClick={filterItems}>E-commerce</button>
        <button className=" bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl" value="webapp" onClick={filterItems}>Web Apps</button>
        <button className=" bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl" value="react" onClick={filterItems}>React JS</button>
        <button className=" bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl" value="webstatic" onClick={filterItems}>Páginas estáticas</button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.allJobs.map((item) => (
            <CardJobs key={item.id} src={item.image} title={item.title} description={item.description} url={item.url} />
          ))
        }
      </div>
    </>
  )
}

