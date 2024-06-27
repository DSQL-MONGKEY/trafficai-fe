
import { MdOutlineDashboard } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { SiConsul } from "react-icons/si";
import { BiAnalyse } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
   const data = {
      fullName: 'Dimas Prasetyo',
      username: 'dimpfe',
      profileImg: 'vite.svg'
   }
   return (
      <div className='w-18 max-w-52 md:flex[2_2_0]'>
         <div className='sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full'>
            <Link to={'/'} className='flex justify-center items-center md:justify-start'>
               <SiConsul />
               <span className="font-extrabold text-xs sm:text-md md:text-2xl mt-4">
                  TrafficAI
               </span>
            </Link>
            <ul className='flex flex-col gap-3 mt-4'>
               <li className='flex justify-center md:justify-start'>
                  <Link to={'/overview'} className='flex gap-3 items-center hover:bg-slate-300 focus:bg-slate-300 transition-all duration-300 rounded-full py-2 pl-2 pr-4 max-w-fit cursor-pointer '>
                     <MdOutlineDashboard />
                     <span className='text-lg hidden md:block'>Overview</span>
                  </Link>
               </li>
               <li className='flex justify-center md:justify-start'>
                  <Link to={'/camera'} className='flex  gap-3 items-center hover:bg-slate-300 transition-all duration-300 rounded-full py-2 pl-2 pr-4 max-w-fit cursor-pointer '>
                     <GiCctvCamera />
                     <span className='text-lg hidden md:block'>Camera</span>
                  </Link>
               </li>
               <li className='flex justify-center md:justify-start'>
                  <Link to={`/analyze`} className='flex gap-3 items-center hover:bg-slate-300 transition-all duration-300 rounded-full py-2 pl-2 pr-4 max-w-fit cursor-pointer '>
                     <BiAnalyse />
                     <span className='text-lg hidden md:block'>Analyze</span>
                  </Link>
               </li>
            </ul>
            {data && (
               <Link to={`/`} className='mt-auto mb-10 hidden lg:flex gap-2 items-start transition-all duration-300 bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded-full mr-2'>
                  <div className='avatar hidden md:inline-flex'>
                     <div className='w-8 rounded-full'>
                        <img src={data?.profileImg || '/avatar-placeholder.png'} alt="profile-image" />
                     </div>
                  </div>
                  <div className='flex flex-1 justify-between'>
                     <div className='hidden md:block'>
                        <p className='text-white font-bold text-sm w-20 truncate'>
                           guest
                        </p>
                        <p className='text-slate-500 text-sm'>
                           @guest
                        </p>
                     </div>
                  </div>
               </Link>
            )}
         </div>
      </div>
   )
}

export default Sidebar

/**
 *  @className : Arbitrary Value
 *  flex[4_4_0] = flex[grow, shrink, basis]
*/