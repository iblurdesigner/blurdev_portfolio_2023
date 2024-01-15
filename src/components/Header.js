'use client'
import Image from "next/image"
import Link from "next/link"
import logo from '../../public/logoEmotivo.png'
// import { useState } from "react"

const Header = () => {
    // const[fix, setFix] = useState(false)

    // function setFixed() {
    //     if(window.scrollY >= 704) {
    //         setFix(true)
    //     }else{
    //         setFix(false)
    //     }
    // }

    // window.addEventListener('scroll', setFixed)

  return (
    <header className="fixed top-0 backdrop-filter backdrop-blur-xl z-10 lg:w-[80%] grid grid-flow-row md:grid md:grid-cols-2  h-fit text-sm">
        <div className="mt-5  lg:w-1/2">
          <Image src={logo} width={329} height={80} className="" alt="logoeMotivoDev" />
        </div>
        <div className="flex justify-between w-full px-10 py-5 ml-auto text-xl md:px-2 xl:px-40 text-blurdev">
          <Link className="group  transition-all duration-300 ease-in-out" href="/">
            <span className="bg-left-bottom bg-gradient-to-r from-blurdev to-blurdev bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Inicio
            </span>
          </Link>
          <Link className="group transition-all duration-300 ease-in-out" href="#portfolio">
            <span className="bg-left-bottom bg-gradient-to-r from-blurdev to-blurdev bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Portafolio
            </span>
          </Link>
          <Link className="group transition-all duration-300 ease-in-out" href="#contacto">
            <span className="bg-left-bottom bg-gradient-to-r from-blurdev to-blurdev bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contacto
            </span>
          </Link>
        </div>
    </header>
  )
}

export default Header