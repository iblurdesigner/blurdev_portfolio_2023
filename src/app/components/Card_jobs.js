import Image from "next/image";

import Github from "../../../public/Github";
import Link from "next/link";

export default function CardJobs(props) {
  return(
    <div className=" bg-indigo-200 w-full flex-col lg:flex-row items-center justify-between pb-2 text-sm md:flex h-full rounded-xl md:rounded-2xl">
      <div className="w-full lg:w-1/2 shadow-lg shadow-slate-400">
        <Image className="w-full" src={props.src} width={284} height={268} alt={props.title} />
      </div>

      <div className="lg:w-1/2">
        <h3 className=" text-devmorado text-4xl md:text-2xl font-bold mt-2">
          {props.title}
        </h3>
        <p className=" text-gray-600 text-sm md:text-base lg:text-xs my-2 lg:px-4">
          {props.description}
        </p>
        <div className="flex justify-between my-2 md:my-6 lg:my-2 lg:px-4">
          <Github fill="#4a25a5" />
          <Github fill="#4a25a5" />
          <Github fill="#4a25a5" />
        </div>

        <div className="w-full">
            <button className=" bg-slate-200 hover:bg-blurdev text-xl font-extralight hover:font-semibold px-5 py-2 rounded-3xl text-zinc-500 hover:text-blurdev-dark">Ver proyecto
            </button>
        </div>

      </div>
    </div>
  )
}