
import { ReactElement } from "react";


interface CardProps {
   name: string,
   data: number
   icon: ReactElement
}

const OverviewCard = ({ name, data, icon }: CardProps) => {
   return (
      <div className="flex flex-col w-52  border border-gray-500 rounded-md p-1">
         <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">
               {name}
            </span>
            <span className="text-2xl">
               {icon}
            </span>
         </div>
         <div className="flex flex-col">
            <span className="text-3xl font-extrabold">
               {data}
            </span>
            <p className="text-slate-600 text-sm">
               *Ini kalkulasi komparasi dari bulan ke bulan
            </p>
         </div>
      </div>
   )
}

export default OverviewCard;