
const CamContainer = () => {
   return (
      <div className="flex flex-col w-80 h-52 gap-2 p-2 bg-blue-200 rounded-md ">
         <div className="">
            <span className="text-4xl font-extrabold">Cam-1</span>
         </div>
         <div className="flex flex-col">
            <span>Camera status: ---</span>
            <span>Latency: ---</span>
         </div>
         <div className="flex ">
            <span>Object detected</span>
         </div>
      </div>
   )
}

export default CamContainer