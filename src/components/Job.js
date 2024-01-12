'use client'
import fetchPost from "@/lib/fetchPost"
import ButtonFilter from "./ButtonFilter"
import CardJobs from "./Card_jobs"
import { useEffect, useState } from "react"
// const API_URL = 'https://rickandmortyapi.com/api/character'

export default function Job() {
  const API_URL = 'http://localhost:3000/api'
  const [items, setItems] = useState({
    allJobs: [],
    filterJobs: []
  })

  useEffect( ()=> {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setItems({
        allJobs: data.data.results,
        filterJobs: data.data.results,
      }))
  }, [])

  const filterItems = (e) => {
    const event = e.target.value

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
        <ButtonFilter name="Todos" />
        <ButtonFilter name="E-commerce" />
        <ButtonFilter name="Páginas estáticas" />
        <ButtonFilter name="Responsive" />
      </div>

      <select className="bg-devmorado text-blurdev-dark rounded-3xl px-5 py-2 m-auto w-full xl:w-1/2" name="categories" onChange={filterItems}>
        <option value="ALL">Mostrar todos</option>
        <option value="ecommerce">E-commerce</option>
        <option value="webapp">Web Apps</option>
        <option value="react">React JS</option>
        <option value="mobileapps">App mobiles</option>
        <option value="webstatic">Páginas estáticas</option>
      </select>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.allJobs.map((item) => (
            <CardJobs key={item.id} src={item.image} title={item.title} description={item.description} url={item.url} />
          ))
        }
      </div>
    </>
  )
}

