import React from "react";
import { ChevronDown } from "lucide-react";
const Topbar = () => {
    return (
        <div className="w-full h-[60px] px-6 bg-white rounded-sm shadow justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <div className="w-2 h-[10.32px] left-[8px] top-[6.34px] absolute">
                        </div>
                    </div>
                </div>
                <div className="text-slate-700 text-base font-medium font-['Inter'] leading-snug">Clients</div>
            </div>
            <div className="h-8 justify-end items-center gap-6 flex">
    <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
        <div className="justify-start items-center gap-1.5 flex">
            <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">Branch(Kathmandu)</div>
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
    <div className="justify-start items-center gap-7 flex">
        <div className="w-6 h-6 relative" />
    </div>
</div>

        </div>
    )
}

export default Topbar;
