import Image from "next/image";

import Github from "../../public/Github";
import JavaScript from "../../public/JavaScript";
import Reactjs from "../../public/Reactjs";
import Nextjs from "../../public/Nextjs";

import ButtonViewProj from "./ButtonViewProj";

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
          <h5 className="text-gray-600">Stack:</h5>
          <JavaScript fill="#fbbf24" />
          <Reactjs />
          <Nextjs fill="#4a25a5" />
        </div>

        <div className="w-full">
          <ButtonViewProj url={props.url} />
        </div>

      </div>
    </div>
  )
}