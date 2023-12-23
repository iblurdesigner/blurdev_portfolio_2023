import Image from "next/image";

import Github from "../../../public/Github";

export default function CardJobs({props}) {
  return(
    <div className=" bg-slate-300 w-full flex-col lg:flex-row items-center justify-between pb-2 text-sm md:flex h-full rounded-xl md:rounded-2xl">
      <div className="w-full lg:w-1/2 shadow-lg shadow-slate-400">
        <Image className="w-full" src="https://storage.googleapis.com/blurdev_portfolio_bucket/webapp/ceiq_shop.jpg" width={284} height={268} alt="proyecto 1" />
      </div>

      <div className="lg:w-1/2">
        <h3 className=" text-devmorado text-4xl md:text-2xl font-bold mt-2">CEIQ Shop</h3>
        <p className=" text-gray-600 text-sm md:text-base lg:text-xs my-2 lg:px-4">E-commerce para CEIQ, desarrollado con Next.js. Pasarela de pago como Stripe, PayPal y la criptomoneda Etherium con la wallet Metamask
        </p>
        <div className="flex justify-between my-2 md:my-6 lg:my-2 lg:px-4">
          <Github fill="#57F3C3" />
          <Github fill="#57F3C3" />
          <Github fill="#57F3C3" />
        </div>

        <div className="w-full">
          <button className="bg-blurdev text-blurdev-dark text-xl font-bold px-5 py-2 rounded-3xl">Ver proyecto
          </button>
        </div>

      </div>
    </div>
  )
}