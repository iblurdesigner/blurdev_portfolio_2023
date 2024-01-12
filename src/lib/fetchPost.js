export default async function fetchPost() {
    const response =  await fetch('http://localhost:3000/api', {
      cache:'no-cache',
      method: "GET"
    })
  
    const data = await response.json()
    return data.data.results
  }