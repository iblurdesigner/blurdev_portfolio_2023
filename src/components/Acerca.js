import Openmail from "./Openmail"

const Acerca = () => {
  return (
    <section className="lg:w-[80%] w-[%90] items-center pt-48 md:pt-32 md:px-52 my-52" id="contacto">
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
  )
}

export default Acerca