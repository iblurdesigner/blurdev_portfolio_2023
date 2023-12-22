import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logoEmotivo.png'
import hero from "../../public/hero.jpg";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-5 px-5 md:pt-10 md:pl-10 md:pr-10 h-screen">
      <div className="z-10 max-w-5xl grid grid-flow-row md:grid md:grid-cols-2 w-full h-fit text-sm">
        <div className="w-full flex justify-center lg:w-1/2">
          <Image src={logo} width={329} height={80} className="" alt="logoeMotivoDev" />
        </div>
        <div className="flex justify-between w-full px-10 py-5 md:px-20 ml-auto">
          <Link href="/">Home</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contacto">Contact</Link>
        </div>
      </div>

      <article className="w-full max-w-5xl items-center justify-between py-5 bg-blurdev-dark ">
        <section className=" justify-between md:flex">
          <article className="w-full text-sm md:flex-col py-5">
            <div className="h-full md:py-5">
              <p className="text-2xl ">Hola, soy David Flores</p>
              <h1 className=" text-5xl text-blurdev">Frontend Developer</h1>
              <h5 className=" text-lg">y apasionado con el análisis de datos</h5>
              <button className="bg-blurdev text-blurdev-dark text-xl font-bold px-5 py-2 rounded-md mt-10">Descargar CV</button>
            </div>
          </article>
          <div className="bg-orange-300 w-full text-sm md:flex ">
            <Image src={hero} width={732} height={704} className=" object-cover" alt="hero" />
          </div>
        </section>
      </article>


      <section className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex group">
        <span className="text-center text-6xl text-blurdev justify-center w-full inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none rotate-90 hover:translate-y-2">
          ⨠
        </span>
      </section>


      
      <section className=" bg-orange-700 max-w-5xl w-full h-30 items-center text-center md:p-10">
        <h2 className="text-4xl">Proyectos</h2>
        <p>su imaginacion en codigo</p>

        <div className=" bg-slate-400 flex flex-wrap justify-between m-auto w-[90%] py-5  ">
          <p>Filtros</p>
          <button>Todos</button>
          <button>E-commerce</button>
          <button>Páginas estáticas</button>
          <button>Responsive</button>
        </div>
        
        <section className="grid md:grid-cols-2">
          <div className="bg-slate-700 w-full items-center justify-between text-sm md:flex h-full py-20">
            <h3>Proyecto 1</h3>
            <p>Descripción del proyecto</p>
          </div>
          <div className="bg-slate-300 w-full items-center justify-between text-sm md:flex h-full py-20">
            <h3>Proyecto 2</h3>
            <p>Descripción del proyecto</p>
          </div>
          <div className="bg-blue-700 w-full items-center justify-between text-sm md:flex h-full py-20">
            <h3>Proyecto 3</h3>
            <p>Descripción del proyecto</p>
          </div>
          <div className="bg-pink-300 w-full items-center justify-between text-sm md:flex h-full py-20">
            <h3>Proyecto 4</h3>
            <p>Descripción del proyecto</p>
          </div>
        </section>
      </section>
      




      <section className="border max-w-5xl w-full items-center">
        <div>
          <h2 className="text-4xl bg-yellow-600 h-fit py-5">Acerca de mi</h2>
        </div>
        <div className="sm:w-full md:grid md:grid-cols-2">
          <div className=" bg-lime-700 min-w-full justify-between">
            <p className="text-sm">Con más de 4 años de experiencia en Desarrollo Web y una reciente graduación en Ingeniería Informática, he demostrado mi capacidad para adaptarme rápidamente a nuevas tecnologías a través de la realización de diversos proyectos personales. 

            Mi enfoque proactivo y mi habilidad para trabajar en equipo me permiten integrarme eficazmente en cualquier entorno empresarial, siempre buscando alinear mis habilidades con las necesidades de la empresa y del cliente. 

            Mi objetivo principal es aportar un valor significativo a cualquier empresa o proyecto con el que colabore, impulsando su crecimiento y éxito a través de mis habilidades y conocimientos en el campo de la informática.</p>
          </div>
          <div className="bg-yellow-800 min-w-full md:w-1/2 justify-between h-fit py-32 text-center">
            <h3>Empecemos un proyecto</h3>
            <button>enviar correo</button>
          </div>
        </div>
      </section>




      <section className="border max-w-5xl w-full items-center">
        <div>
          <h4 className=" bg-blue-600 h-fit py-5 text-center">©2023, Hecho con ❤️ por Blur</h4>
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
