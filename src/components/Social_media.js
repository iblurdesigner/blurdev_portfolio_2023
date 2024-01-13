import Github from '../../public/Github'
import Linkedin from '../../public/Linkedin'

export default function SocialMedia() {
  return (
    <>
      <button>
        <Github fill="#57F3C3" />
        <a href="https://github.com/iblurdesigner" target="_blank">iblurdesigner</a>
      </button>
      <button>
        <Linkedin fill="#57F3C3" />
        <a href="https://www.linkedin.com/in/blurdev/" target="_blank">blurdev</a>
      </button>
    </>
  )
}
