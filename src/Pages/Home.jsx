export default function Home(){


    return (
        <div className="text-sm">
            <div className="grid  grid-cols-8 gap-4">
                
                <div className="col-span-2 mt-6 mb-6">
                        <div className=" bg-white rounded-md  shadow">
                             <div className="  border-b-2">
                                  <div className=" rounded-tl-sm rounded-tr-sm">
                                       <img src="Backgroundd Linkedin Dan's Profile.jpg" alt="backgroundd-profile" srcset="" className="rounded-tl-lg rounded-tr-lg" />
                                  </div>

                                

                                  <div className="mt-10  text-center pb-1">
                                      <h1 className="text-md font-semibold text-center">Dan ELENGA</h1>
                                      <span className="text-xs text-slate-400  ">Développeur Full Stack React- <br /> Vue/Laravel</span>
                                  </div>
                             </div>

                             <div className=" p-2 text-xs  cursor-pointer border-b-2">
                                <ul className=" flex justify-between  hover:bg-slate-200">
                                    <div>
                                        <li className="text-slate-400">connections</li>
                                        <li className="text-slate-800 font-semibold">Grow your network </li>
                                    </div>
                                    <span className="text-blue-500 font-bold">75</span>
                                </ul>

                                <ul className=" flex justify-between  hover:bg-slate-200">
                                    <div>
                                        <li className="text-slate-400">Who's viewed your profile</li>
                                    </div>
                                    <span className="text-blue-500 font-bold">55</span>
                                </ul>
                             </div>

                             <div className="text-xs p-2 hover:bg-slate-100 border-b-2">
                                   <ul className="">
                                       <li>Access exclusive tools & insights </li>
                                   </ul>
                                   <div className="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-orange-300">
                                             <path fill-rule="evenodd" d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                         </svg>
                                         <span className=" underline font-semibold cursor-pointer">Reactivate Premium</span>

                                   </div>
                             </div>

                             <div className="text-xs p-2 flex  space-x-3 items-center hover:bg-slate-100">
                                 <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-slate-600">
                                          <path fill-rule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clip-rule="evenodd" />
                                      </svg>
                                 </div>
                                 <ul>
                                    <li className=" font-semibold">My items</li>
                                 </ul>
                             </div>
                        </div>

                        <div className="mt-2 p-2 bg-white rounded-md shadow sticky top-3 px-2">
                              <div className="text-xs">
                                    <div className="">
                                       <h2 className="text-xs text-slate-400">Recent</h2>
                                       <ul className="flex justify-around mt-2">
                                          <div>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-slate-600">
                                                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                               </svg>
                                          </div>
                                          <span className="text-slate-500">User expérience (UX) design,P..</span>
                                       </ul>
                                       <ul className="flex justify-around mt-2">
                                          <div>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-slate-600">
                                                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                               </svg>
                                          </div>
                                          <span className="text-slate-500">Django Developers Communit...</span>
                                       </ul>

                                       <ul className="flex justify-around mt-2">
                                          <div>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-slate-600">
                                                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                               </svg>
                                          </div>
                                          <span className="text-slate-500">Python Developers Communit...</span>
                                       </ul>
                                    </div>
                              </div>

                              <div className="text-xs">
                                    <div className="">
                                       <h2 className="text-xs text-blue-500 font-semibold mt-6">Groups</h2>
                                       <ul className="flex justify-around mt-2">
                                          <div>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-slate-600">
                                                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                               </svg>
                                          </div>
                                          <span className="text-slate-500">User expérience (UX) design,P..</span>
                                       </ul>
                                       <ul className="flex justify-around mt-2">
                                          <div>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-slate-600">
                                                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                               </svg>
                                          </div>
                                          <span className="text-slate-500">Django Developers Communit...</span>
                                       </ul>

                                       <ul className="flex justify-around mt-2">
                                          <div>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-slate-600">
                                                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                               </svg>
                                          </div>
                                          <span className="text-slate-500">Python Developers Communit...</span>
                                       </ul>
                                    </div>
                              </div>

                              <div className="text-xs">
                                    <div className="">
                                       <ul className="flex justify-between mt-4 items-center">
                                           <span className="text-blue-500 font-semibold">Events</span>
                                             <div>
                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-slate-500 cursor-pointer">
                                                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                 </svg>
                                             </div>
                                       </ul>
                                       
                                    </div>
                              </div>

                              <div className="text-xs">
                                    <div className="">
                                       <ul className="flex justify-between mt-4">
                                           <span className="text-blue-500 font-semibold">Followers Hashtags</span>
                                       </ul>
                                       
                                    </div>
                              </div>

                              
                              <div className="text-xs mt-2 text-center cursor-pointer hover:bg-slate-200">
                                    <div className="p-2">
                                       <ul className="flex justify-center mt-4">
                                           <span className="text-slate-500 text-center font-semibold">Discovers More </span>
                                       </ul>
                                       
                                    </div>
                              </div>
                        </div>
                </div>

                <div className="col-span-4 mt-6 p-1">
                        <div className="bg-white rounded-md shadow px-2 ">
                            <div className="p-3 flex justify-between items-center">
                                <svg onClick={()=>{alert("Le profil utilisateur n'est pour l'instant pas disponible")}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12 fill-slate-400 cursor-pointer">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                                </svg>
                                <button onClick={()=>{alert("Le partage de poste n'est pas encore disponible")}} className="px-4 text-sm  border-2 border-slate-100 w-[26rem] h-12 rounded-3xl text-left font-semibold text-slate-500">Start a post</button>
                            </div>
                            
                            <div className=" px-5 flex justify-between pb-2">

                                 <ul onClick={()=>{alert("Cette fonctionnalité n'est pas encore disponible !")}} className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer ">
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-blue-500">
                                        <path fill-rule="evenodd" d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd" />
                                    </svg>

                                     <div>
                                         <li className="font-semibold text-slate-500 text-sm">Photo</li>
                                     </div>
                                 </ul>

                                 <ul onClick={()=>{alert("Cette fonctionnalité n'est pas encore disponible !")}} className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-green-600">
                                         <path fill-rule="evenodd" d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" />
                                     </svg>



                                     <div>
                                         <li className="font-semibold text-slate-500 text-sm">Video</li>
                                     </div>
                                 </ul>

                                 <ul onClick={()=>{alert("Cette fonctionnalité n'est pas encore disponible !")}} className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-yellow-600">
                                          <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                                        </svg>
                                     <div>
                                         <li className="font-semibold text-slate-500 text-sm">Event</li>
                                     </div>
                                 </ul>

                                 <ul onClick={()=>{alert("Cette fonctionnalité n'est pas encore disponible !")}} className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-orange-600">
                                       <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z" clip-rule="evenodd" />
                                       <path d="M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z" />
                                     </svg>

                                     <div>
                                         <li className="font-semibold text-slate-500 text-sm">Write Articles</li>
                                     </div>
                                 </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-md border-slate-300  mt-5 shadow">
                            <div>
                                <div className="flex justify-between">
                                    <div className="p-3 flex space-x-2 items-center">
                                        <svg onClick={()=>alert("Cette fonctionnalité n'est pas encore disponible")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-9 h-9 fill-slate-300 cursor-pointer">
                                          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                                        </svg>
                                        <ul>
                                            <li onClick={()=>alert("Cette fonctionnalité n'est pas encore disponible")} className="font-bold text-sm cursor-pointer">His Name</li>
                                            <li className="text-xs text-slate-500">His Work</li>
                                            <ul className="flex items-center space-x-1">
                                                <li className="text-xs text-slate-400">3h</li>
                                                <li>
                                                    <svg onClick={()=>alert("Cette fonctionnalité n'est pas encore disponible")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4  fill-slate-400 cursor-pointer">
                                                       <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.503.204A6.5 6.5 0 117.95 3.83L6.927 5.62a1.453 1.453 0 001.91 2.02l.175-.087a.5.5 0 01.224-.053h.146a.5.5 0 01.447.724l-.028.055a.4.4 0 01-.357.221h-.502a2.26 2.26 0 00-1.88 1.006l-.044.066a2.099 2.099 0 001.085 3.156.58.58 0 01.397.547v1.05a1.175 1.175 0 002.093.734l1.611-2.014c.192-.24.296-.536.296-.842 0-.316.128-.624.353-.85a1.363 1.363 0 00.173-1.716l-.464-.696a.369.369 0 01.527-.499l.343.257c.316.237.738.275 1.091.098a.586.586 0 01.677.11l1.297 1.297z" clip-rule="evenodd" />
                                                    </svg>

                                                </li>
                                            </ul>
                                        </ul>
                                    </div>

                                    <div className="pt-[0.6rem] pr-3">
                                        <svg onClick={()=>alert("Cette fonctionnalité n'est pas encore disponible")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7 fill-slate-500 cursor-pointer ">
                                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="px-4 pb-1">
                                    <div className="p-1">
                                        <p className="text-sm text-slate-600">The text here...</p>
                                    </div>
                                </div>

                                <div>
                                    <img onClick={()=>{alert("Cette fonctionnalité n'est pas disponible")}} src="MacBook Pro 16_ - 1.png" alt="post" className= "bg-cover" />
                                </div>

                                <div className="mt-2 px-4">
                                    <div className=" pb-1 border-b-2 ">
                                        <ul className="flex  space-x-2 items-center">
                                            <li>
                                                <svg onClick={()=>{alert("Cette fonctionnalité n'est pas disponible")}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-slate-200 cursor-pointer">
                                                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                                                </svg>
                                            </li>

                                            <span className="text-xs text-slate-500">0</span>
                                        </ul>
                                    </div>

                                    <div className="px-4 pt-1 pb-2">
                                        <div className="flex justify-between">          
                                              <ul onClick={()=>alert("Cette fonctionnalité n'est pas encore disponible")} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer ">
                                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-500">
                                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                                   </svg>

                                                  <li className="text-sm text-slate-500 font-semibold">Like</li>
                                              </ul>

                                              <ul onClick={()=>alert("Cette fonctionnalité n'est pas encore disponible")} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer ">
                                                  
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                                  </svg>

                                                  <li className="text-sm text-slate-500 font-semibold">comment</li>
                                              </ul>

                                              <ul onClick={()=>alert("Cette fonctionnalité n'est pas encore disponible")} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer ">
                                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-500">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                                   </svg>


                                                  <li className="text-sm text-slate-500 font-semibold">Repost</li>
                                              </ul>

                                              <ul onClick={()=>alert("Cette fonctionnalité n'est pas encore disponible")} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer ">
                                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-500">
                                                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                   </svg>

                                                  <li className="text-sm text-slate-500 font-semibold">send</li>
                                              </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                </div>

                <div className="col-span-2 mt-6 ">
                    <div className="sticky top-20">

                    
                      <div className="bg-white rounded-md border-slate-300 px-2 shadow ">
                          <img src="AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="pub" srcset="" className=" object-fill" />
                      </div>

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
            </div>
        </div>
    )
}