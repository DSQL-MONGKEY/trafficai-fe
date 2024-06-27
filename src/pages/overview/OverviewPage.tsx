
const OverviewPage = () => {
   return (
      <div className="flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen">
         <div className="flex flex-col p-2">
            <span className="font-extrabold text-xl md:text-6xl">Overview.</span>
            <div className="flex flex-1 flex-col justify-center gap-3">

               <div className="flex bg-blue-200 rounded-md p-2">
                  <div className="flex flex-col">
                     <span className="font-bold">
                        Traffic Density Detection
                     </span>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos hic libero quo reiciendis sed, ex iusto autem quae corrupti amet exercitationem odio. Mollitia et repudiandae, odit deserunt placeat libero quo!
                  </div>
               </div>
               <div className="flex flex-2 gap-3">
                  <div className="flex flex-col w-1/2">
                     <span className="font-bold">
                        Detection
                     </span>
                     <div className="flex flex-col p-2">
                        <div className="flex justify-between">
                           <span className="font-semibold">
                              Motorcycles : 
                           </span>
                           <span className="font-semibold">
                              0 
                           </span>
                        </div>
                        <div className="flex justify-between">
                           <span className="font-semibold">
                              Cars : 
                           </span>
                           <span className="font-semibold">
                              0 
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-col w-1/2">
                     <span className="font-bold">
                        Action
                     </span>
                     <div className="flex flex-col p-2">
                        <div className="flex justify-between">
                           <span>
                              Treshold: 
                           </span>
                           <span>
                              50/100
                           </span>
                        </div>
                        <div className="flex justify-between">
                           <span>
                              Move Wessel: 
                           </span>
                           <span>
                              Not Required
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OverviewPage