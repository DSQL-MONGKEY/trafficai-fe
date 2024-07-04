
interface CamProps {
   name: string,
}

const CamContainer = ({ name }: CamProps) => {
   return (
      <div className="flex flex-col w-60 h-52 gap-2 p-2 shadow-lg border rounded-md ">
         <div className="">
            <span className="text-4xl font-extrabold">{name}</span>
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