export default function RightSidebar() {

    return (
        <div className="col-span-2 mt-6 ">
            {/***Here Pub Section*/}
            <div className="sticky top-20">


                <div className="bg-white rounded-md border-slate-300 px-2 shadow ">
                    <img src="AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="pub" srcset="" className=" object-fill" />
                </div>
                {/***Footer's Link */}
                <div className="mt-3">
                    <ul className="text-xs text-slate-500 flex flex-wrap space-x-4 justify-center  space-y-1">
                        <li className=" cursor-pointer hover:text-blue-500 hover:underline">About</li>
                        <li className=" cursor-pointer hover:text-blue-500 hover:underline">Accessibility</li>
                        <li className=" cursor-pointer hover:text-blue-500 hover:underline">Help Center</li>
                        <li className=" cursor-pointer hover:text-blue-500 hover:underline">Privacy & Terms</li>
                        <li className=" cursor-pointer hover:text-blue-500 hover:underline">Ad Choices</li>
                        <li className=" cursor-pointer hover:text-blue-500 hover:underline">Advertising</li>
                        <li className=" cursor-pointer hover:text-blue-500 hover:underline">Business Services</li>
                        <li className=" cursor-pointer hover:text-blue-500 hover:underline">Get the Linkedin App</li>
                        <li className=" cursor-pointer hover:text-blue-500 hover:underline">More</li>
                    </ul>
                    {/***About company*/}
                    <div className="mt-2 p-1">
                        <div className="flex items-center space-x-2 justify-center">
                            <p className="text-[#2868b2] font-semibold text-sm">LinkeDin</p>
                            <img src="logo linkedin.webp" alt="" srcset="" className="w-5 h-4" />
                            <span className="text-xs text-slate-700">LinkedIn Corporation © 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}