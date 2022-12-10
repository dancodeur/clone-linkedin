export default function LeftSidebar() {


    return (
        <div className="col-span-2 mt-6 mb-6">
            {/***User's profile information */}
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
            {/***Current User's Activities */}
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
    )
}