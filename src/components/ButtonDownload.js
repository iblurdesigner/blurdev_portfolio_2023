import AnimateDownload from "./AnimateDownload"

const ButtonDownload = () => {
  return (
    <a href="David Flores CV 2023.pdf" download="David Flores CV.pdf">
      <button className="bg-blurdev  text-blurdev-dark text-xl font-bold px-5 py-2 rounded-3xl mt-10 flex items-center">
          <AnimateDownload />
          <p>Hoja de vida</p> 
      </button>
    </a>
  )
}

export default ButtonDownload