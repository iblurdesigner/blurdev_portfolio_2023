import AnimateDownload from "./AnimateDownload"

const ButtonDownload = () => {
  return (
    <button className="bg-blurdev  text-blurdev-dark text-xl font-bold px-5 py-2 rounded-3xl mt-10 flex items-center">
        <AnimateDownload />
        <p>Hoja de vida</p> 
    </button>
  )
}

export default ButtonDownload