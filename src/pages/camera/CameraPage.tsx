import CamContainer from "./CamContainer"

const CameraPage = () => {
   return (
      <div className="flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen">
         <div className="flex flex-col p-2">
            <span className="font-extrabold text-xl md:text-6xl">
               Camera.
            </span>
            <div className="flex flex-col md:flex-row gap-2 mt-5">
               <CamContainer name={'Cam-1'} />
               <CamContainer name={'Cam-2'} />
               <CamContainer name={'Cam-3'} />
            </div>
         </div>
      </div>
   )
}

export default CameraPage