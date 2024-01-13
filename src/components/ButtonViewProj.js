const ButtonViewProj = (props) => {
  return (
    <button className=" bg-slate-200 hover:bg-blurdev text-xl font-extralight hover:font-semibold px-5 py-2 rounded-3xl text-zinc-500 hover:text-blurdev-dark">
    <a href={props.url} target="_blank">Ver proyecto</a>
    </button>
  )
}

export default ButtonViewProj