import { NavLink } from "react-router-dom"

export default function Header(){
 

    return (

        <div className="bg-[#ffffff] px-[14rem]  border-b-2  sticky top-0">
             <div className="grid grid-cols-6 p-2">
                 {/** Linkedin Picture and Search Bar*/}
                <div className="col-span-2  flex items-center ">

                     <div>
                        <NavLink to="/">
                             <img src="logo linkedin.webp" alt="logo-linkedin" srcset="" className="w-10 h-8 cursor-pointer" />
                        </NavLink>
                     </div>

                     <div>
                        <form className="flex space-x-2 items-center relative ">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-[#5f6163] absolute left-4 top-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <input onClick={()=>alert("Hello")} type="search" name="search" placeholder="search" className="px-8 py-1 rounded-md placeholder-slate-500  bg-[#eef3f8] text-[#5f6163] text-[16px]" />
                        </form>
                     </div>

                </div>
                 {/** Section Navbar's Links*/}
                <div className="col-span-3 flex justify-end space-x-6 mr-3">
                   
                      <NavLink to="/" className=" group relative">
                          
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-slate-600 group-hover:fill-black  ml-1">
                                   <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                               </svg>
                           <span className="text-xs text-slate-600 hover:text-black">Home</span>
                           
                      </NavLink>
        
                      <NavLink to="/MyNetwork" className=" group relative">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-slate-600 group-hover:fill-black ml-3">
                              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                         </svg>


                           <span className="text-xs text-slate-600 hover:text-black">Network</span>
                           <span className="bg-red-600 text-white text-xs px-1 rounded-full absolute -top-1 right-1">4</span>

                      </NavLink>

                      <NavLink to="/" className="group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-slate-600 group-hover:fill-black ">
                              <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd" />
                              <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                            </svg>

                           <span className="text-xs text-slate-600 hover:text-black">Jobs</span>
                      </NavLink>

                      <NavLink to="/" className=" group relative">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-slate-600 group-hover:fill-black  ml-4">
                             <path fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                         </svg>

                           <span className="text-xs text-slate-600 hover:text-black">Messaging</span>

                           <span className="bg-red-600 text-white text-xs px-1 rounded-full absolute -top-1 right-2">2</span>
                      </NavLink>


                      <NavLink to="/" className=" group relative">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-slate-600 group-hover:fill-black  ml-5">
                           <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z" clip-rule="evenodd" />
                         </svg>

                           <span className="text-xs text-slate-500 hover:text-black ">Notifications</span>

                           <span className="bg-red-600 text-white text-xs px-1 rounded-full absolute -top-1 right-4">1</span>
                      </NavLink>
                       
                       <div className="flex relative group">
   
                            <NavLink to="/Me" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-slate-600 group-hover:fill-black ml-1">
                                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                                </svg>

                                 <div className="flex items-center mt-1">
                                     <span className="text-xs text-slate-600 hover:text-black pt-[0.11rem]">Me</span>         
                                 </div>

                            </NavLink>

                        
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 absolute fill-slate-600  group-hover:fill-black  -right-3 top-[1.63rem] cursor-pointer">
                                   <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                               </svg>
                           
                      </div>
                
                     
                </div>
                 {/** Another Navbar's Links Section*/}
                <div className=" border-l-2 border-slate-200 col-span-1 flex justify-end px-2 space-x-6 ">
                
                   <div className="flex relative group">
   
                      <NavLink to="/" className="">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-slate-600 group-hover:fill-black ml-1">
                                <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                              </svg>

                          <div className="flex items-center mt-1">
                              <span className="text-xs text-slate-600 hover:text-black pt-[0.11rem]">Work</span>         
                          </div>

                      </NavLink>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 absolute fill-slate-600  group-hover:fill-black  -right-6 top-[1.63rem] cursor-pointer">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
  
                   </div>

                    <NavLink to="/" className="group">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-slate-600 group-hover:fill-black ml-7">
                                  <path d="M13.92 3.845a19.361 19.361 0 01-6.3 1.98C6.765 5.942 5.89 6 5 6a4 4 0 00-.504 7.969 15.974 15.974 0 001.271 3.341c.397.77 1.342 1 2.05.59l.867-.5c.726-.42.94-1.321.588-2.021-.166-.33-.315-.666-.448-1.004 1.8.358 3.511.964 5.096 1.78A17.964 17.964 0 0015 10c0-2.161-.381-4.234-1.08-6.155zM15.243 3.097A19.456 19.456 0 0116.5 10c0 2.431-.445 4.758-1.257 6.904l-.03.077a.75.75 0 001.401.537 20.902 20.902 0 001.312-5.745 1.999 1.999 0 000-3.545 20.902 20.902 0 00-1.312-5.745.75.75 0 00-1.4.537l.029.077z" />
                              </svg>


                                <span className="text-xs text-slate-600 hover:text-black">Post a job for free</span>
                    </NavLink>
                </div>
             </div>
        </div>
    )
}