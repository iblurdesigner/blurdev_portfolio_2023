import Acerca from "@/components/Acerca";
import Job from "../components/Job";
import ArrowDown from "@/components/ArrowDown";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-5 px-5 md:pt-10 md:pl-10 md:pr-10 xl:pt-4 h-screen">
      <Header />

      <Hero />

      <section className="lg:w-[80%] w-full h-30 flex justify-center text-center md:p-10">
        <ArrowDown />
      </section>


      
      <section className=" lg:w-[80%] w-full h-30 items-center text-center pt-48 md:p-28" id="portfolio">
        <h2 className="text-5xl text-blurdev">Proyectos</h2>
        <p className="text-lg">su imaginación en código</p>
        <section>
          <Job />
        </section>
      </section>
      

      <Acerca />

      <Footer />
    </main>
  )
}
