import Github from '../../public/Github'
import Linkedin from '../../public/Linkedin'

export default function SocialMedia() {
  return (
    <>
      <div>
        <Github fill="#57F3C3" />
        <a href="https://github.com/iblurdesigner">iblurdesigner</a>
      </div>
      <div>
        <Linkedin fill="#57F3C3" />
        <a href="https://www.linkedin.com/in/blurdev/">blurdev</a>
      </div>
    </>
  )
}
