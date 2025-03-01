import { LiaMotorcycleSolid, LiaCarSideSolid } from "react-icons/lia";
import { GiExtractionOrb } from "react-icons/gi";

import OverviewCard from "./OverviewCard";
import { useEffect, useState } from "react";
import axios from "axios";

const OverviewPage = () => {
   const [data, setData] = useState([])
   const body = JSON.stringify({
      "camera": 1,
      "total_kendaraan": true,
      "total_motor": true,
      "total_mobil": true
   })
      const handleAPI = async() => {
      const data = await axios.get(`http://127.0.0.1:8000/camera/get?body=${body}`, {
         headers: {
            "Content-Type": "application/json"
         },
      })
      console.log(data)

      
   }
   useEffect(() => {
      handleAPI()
   })
   
   return (
      <div className="flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen ">
         <div className="flex flex-col p-2">
            <span className="font-extrabold text-xl md:text-6xl">
               Overview.
            </span>
            <div className="flex flex-1 flex-col justify-center gap-3">

               {/* <div className="flex bg-blue-200 rounded-md p-2">
                  <div className="flex flex-col">
                     <span className="font-bold">
                        Traffic Density Detection
                     </span>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos hic libero quo reiciendis sed, ex iusto autem quae corrupti amet exercitationem odio. Mollitia et repudiandae, odit deserunt placeat libero quo!
                  </div>
               </div> */}
               <div className="flex flex-2 flex-col sm:flex-row justify-start gap-3 mt-5">
                  <OverviewCard 
                     name="Motorcycles" 
                     data={'3'} 
                     icon={<LiaMotorcycleSolid />} 
                  />
                  <OverviewCard 
                     name="Cars" 
                     data={'1'} 
                     icon={<LiaCarSideSolid />} 
                  />
                  <OverviewCard 
                     name="Action" 
                     data={'---'} 
                     icon={<GiExtractionOrb />} 
                  />
               </div>   
               <div className="flex flex-2 flex-col sm:flex-row justify-start gap-3 mt-5">
                  <OverviewCard 
                     name="Motorcycles" 
                     data={'3'} 
                     icon={<LiaMotorcycleSolid />} 
                  />
                  <OverviewCard 
                     name="Cars" 
                     data={'2'} 
                     icon={<LiaCarSideSolid />} 
                  />
                  <OverviewCard 
                     name="Action" 
                     data={'---'} 
                     icon={<GiExtractionOrb />} 
                  />
               </div>   
               <div className="flex flex-2 flex-col sm:flex-row justify-start gap-3 mt-5">
                  <OverviewCard 
                     name="Motorcycles" 
                     data={'3'} 
                     icon={<LiaMotorcycleSolid />} 
                  />
                  <OverviewCard 
                     name="Cars" 
                     data={'1'} 
                     icon={<LiaCarSideSolid />} 
                  />
                  <OverviewCard 
                     name="Action" 
                     data={'---'} 
                     icon={<GiExtractionOrb />} 
                  />
               </div>   
            </div>
         </div>
      </div>
   )
}

export default OverviewPage;

/**
 *  @className : Arbitrary Value
 *  flex[4_4_0] = flex[grow, shrink, basis]
*/