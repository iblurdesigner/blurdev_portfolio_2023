import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logoEmotivo.png'
import hero from "../../public/hero.jpg";
import SocialMedia from "../components/Social_media";
import Job from "../components/Job";
import ButtonBlurdev from "@/components/ButtonBlurdev";
import Openmail from "@/components/Openmail";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-5 px-5 md:pt-10 md:pl-10 md:pr-10 xl:pt-4 h-screen">
      <div className="z-10 lg:w-[80%] grid grid-flow-row md:grid md:grid-cols-2 w-full h-fit text-sm">
        <div className="w-full flex justify-center lg:w-1/2">
          <Image src={logo} width={329} height={80} className="" alt="logoeMotivoDev" />
        </div>
        <div className="flex justify-between w-full px-10 py-5 ml-auto text-xl md:px-2 xl:px-40">
          <Link href="/">Home</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contacto">Contact</Link>
        </div>
      </div>

      <article className="w-full lg:w-[80%] items-center justify-between py-5 bg-blurdev-dark ">
        <section className="justify-between md:flex">
          <article className="w-full md:w-3/5 lg:w-full text-sm md:flex-col">
            <div className="lg:pt-40 ">
              <p className="text-2xl ">Hola, soy David Flores</p>
              <h1 className=" text-5xl text-blurdev">Frontend Developer</h1>
              <h5 className=" text-lg">y apasionado con el análisis de datos</h5>
              <ButtonBlurdev name="Hoja de Vida"/>

              <div className="w-2/3 md:w-1/2 lg:w-1/3 pt-10 lg:pt-20 flex justify-between gap-4">
                <SocialMedia />
              </div>
            </div>
            

          </article>
          <div className="w-full max-sm:invisible md:visible md:flex ">
            <Image src={hero} width={732} height={704} className="max-sm:w-0 max-sm:h-0 object-contain" alt="foto de David Flores" />
          </div>
        </section>
      </article>


      <section className="z-10 lg:w-[80%] w-full items-center justify-between text-sm lg:flex group">
        <span className="text-center text-6xl text-blurdev justify-center w-full inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none rotate-90 hover:translate-y-2">
          ⨠
        </span>
      </section>


      
      <section className=" lg:w-[80%] w-full h-30 items-center text-center md:p-10">
        <h2 className="text-5xl text-blurdev">Proyectos</h2>
        <p className="text-lg">su imaginación en código</p>

        
        <section>
          <Job />
        </section>
      </section>
      




      <section className="lg:w-[80%] w-[%90] items-center md:px-52 my-52">
        <div>
          <h2 className="text-5xl text-blurdev h-fit py-5">Acerca de mí</h2>
        </div>
        <div className="sm:w-full md:grid md:grid-cols-2 h-fit">
          <div className="min-w-full justify-between">
            <p className="text-sm">Con más de 4 años de experiencia en Desarrollo Web y una reciente graduación en Ingeniería Informática, he demostrado mi capacidad para adaptarme rápidamente a nuevas tecnologías a través de la realización de diversos proyectos personales. 

            Mi enfoque proactivo y mi habilidad para trabajar en equipo me permiten integrarme eficazmente en cualquier entorno empresarial, siempre buscando alinear mis habilidades con las necesidades de la empresa y del cliente. 

            Mi objetivo principal es aportar un valor significativo a cualquier empresa o proyecto con el que colabore, impulsando su crecimiento y éxito a través de mis habilidades y conocimientos en el campo de la informática.</p>
          </div>
          <div className="min-w-full md:w-1/2 justify-between h-full text-center">
            <div className="">
              <h3 className="text-2xl text-blurdev">Empecemos un proyecto</h3>
            </div>
            <Openmail />
          </div>
        </div>
      </section>




      <section className="lg:w-[80%] w-full items-center">
        <div>
          <h4 className="h-fit py-5 text-center">©2023, Hecho con ❤️ por Blur</h4>
        </div>
      </section>
        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
    </main>
  )
}
