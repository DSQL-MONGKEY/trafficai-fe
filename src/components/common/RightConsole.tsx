import { cn } from "@/utils/cn";
import { FaAnglesLeft } from "react-icons/fa6";
import { useState } from "react"


const RightConsole = () => {
   const [isExpanded, setIsExpanded] = useState<boolean>(true);

   return (
      <>
         <div className={cn(isExpanded ? "flex flex-col w-32" : "hidden w-0")}>
            <div className="" onClick={() => setIsExpanded(!isExpanded)}>
               <FaAnglesLeft className="text-xl rotate-180" />
            </div>
         </div>

         {!isExpanded && (
            <div className="" onClick={() => setIsExpanded(!isExpanded)}>
            <FaAnglesLeft className="text-xl" />
            </div>
         )}
      </>
   ) 
}

export default RightConsole