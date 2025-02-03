import Image from "next/image"
import ButtonDownload from "./ButtonDownload"
import SocialMedia from "./Social_media"
import hero from "../../public/hero.jpg";

const Hero = () => {
  return (
    <article className="w-full mt-36 md:mt-20 lg:mt-2  lg:w-[80%] items-center justify-between py-5 bg-blurdev-dark ">
        <section className="justify-between md:flex">
          <article className="w-full md:w-3/5 lg:w-full text-sm md:flex-col">
            <div className="lg:pt-40 ">
              <p className="text-2xl ">Hola, soy David Flores</p>
              <h1 className=" text-5xl text-blurdev">Frontend Developer</h1>
              <h5 className=" text-lg">y apasionado con el análisis de datos</h5>
              <ButtonDownload />

              <div className="w-2/3 md:w-1/2 lg:w-1/3 pt-10 lg:pt-20 flex justify-between gap-4">
                <SocialMedia />
              </div>
            </div>
            

          </article>
          <div className="w-full max-sm:invisible md:visible md:flex ">
            <Image src={hero} sizes="(min-width: 768px) 370" width={732} height={704} className="max-sm:w-0 max-sm:h-0 object-contain" alt="foto de David Flores" priority />
          </div>
        </section>
      </article>
  )
}

export default Hero