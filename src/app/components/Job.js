import Image from "next/image"
import CardJobs from "./Card_jobs"
// const API_URL = 'https://rickandmortyapi.com/api/character'

async function fetchPost() {
  const response =  await fetch('http://localhost:3000/api', {
    method: "GET"
  })

  const data = await response.json()
  return data.data.results
}

export default async function Job() {
  const jobs = await fetchPost()

  return (
    <>
      <div className="flex flex-wrap justify-evenly m-auto w-full xl:w-1/2 py-5 text-sm">
        <button className=" bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl">Todos</button>
        <button className="bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl">E-commerce</button>
        <button className="bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl">Páginas estáticas</button>
        <button className="bg-devmorado px-8 py-4 m-2 md:px-5 md:py-2 rounded-3xl">Responsive</button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {jobs.map((job) => (
            <CardJobs key={job.id} src={job.image} title={job.title} description={job.description} url={job.url} />
          ))
        }
      </div>
    </>
  )
}

