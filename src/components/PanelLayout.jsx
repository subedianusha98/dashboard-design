import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { Grip, Bell, Mail, Settings, Moon, ChevronDown, Plus } from 'lucide-react';

const PanelLayout = ({ children }) => {
    return (
        <div className=' w-[1440px] flex flex-col gap-[10px]'>
            <div className="h-[72px] p-[10px] bg-white justify-between items-center flex">
                <div className="h-7 justify-start items-center gap-4 flex">
                    <div className="w-6 h-6 relative cursor-pointer">
                        
                    </div>
                    
                        <div className="justify-start items-center gap-9 flex cursor-pointer">
                            <Grip />
                            <div className="text-gray-900 text-xl font-semibold font-['Inter'] leading-7">Test Project</div>
                        </div>
                        
                  
                </div>

                <div className="justify-start items-center gap-6 flex">
              
                   
                   
                    <div className="w-6 h-6 relative cursor-pointer">
                        <Bell />
                        <div className="w-3.5 h-3.5 left-0 top-0 absolute bg-green-400 rounded-full" />
                        <div className="w-3.5 h-3.5 left-0 top-0 absolute text-center text-white text-[8px] font-medium font-['Inter'] leading-snug">2</div>
                    </div>
                    <div className="w-6 h-6 relative cursor-pointer" >
                        <Mail />
                    </div>
                    <div className="w-6 h-6 relative cursor-pointer" >
                        <Settings />
                    </div>
                    <div className="justify-start items-center gap-1 flex cursor-pointer">
                        <div className="justify-start items-center gap-6 flex cursor-pointer">
                            <div className="w-6 h-6 relative cursor-pointer" >
                                <Moon />
                            </div>
                            <img className="w-[35px] h-[35px] rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" />
                        </div>
                        <div className=" w-6 h-6 relative">
            <select className="appearance-none bg-transparent border-none text-gray-500 text-xs font-normal font-['Inter'] leading-none outline-none cursor-pointer">
                <option value="" disabled selected></option>
                <option value="option1">1</option>
                <option value="option2">2</option>
                <option value="option3">3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown size={14} />
            </div>
        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-[10px]'>
                <div className='max-w-[20%]'><Sidebar /></div>
                <div className='w-[100%] flex flex-col gap-[10px]'>
                    <Topbar />

                    <div className='w-full'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PanelLayout;
