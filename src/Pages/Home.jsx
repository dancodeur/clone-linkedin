import { useState } from "react"
import CardArticle from "../Component/CardArticle"
import LeftSidebar from "../Component/Home/LeftSidebar"
import RightSidebar from "../Component/Home/RightSidebar"

let id = 0
export default function Home() {

    //state
    const [createPost, setCreatePost] = useState([]);
    const [tooglecreatePost, SetTooglecreatePost] = useState(false);
    const [articles, setArticles] = useState([
        { id: id++, name: '' },
    ]);

    const [Hide,setHide]=useState(false); //Cache l'élement en absolute qui s'affiche après l'ouverture du header...

    const IstooglecreatePost=()=>{

        SetTooglecreatePost(!tooglecreatePost);
        
        if(tooglecreatePost==true){
            setHide(false);
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        //Array Copy
        const newData = [...articles];
        const id = new Date().getTime;
        const name = createPost;

        if (name) {
            newData.push(id, name);
            setArticles(newData);
            setCreatePost("");
        } else {
            alert("Vous devez saisir quelque chose à poster !");
        }
    }

    const handlechange = (e) => {
        setCreatePost(e.target.value);
    }

    const Modal = (
        <div className="bg-black bg-opacity-75 inset-0 absolute flex justify-center items-center  max-h-screen">
            <div className="bg-white shadow rounded-md w-[35%] h-auto">
                {/**Header Modal */}
                <div className=" border-b-2 border-slate-300">
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-xl text-slate-600">Create a Post</h1>
                        <svg onClick={() => SetTooglecreatePost(! tooglecreatePost)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-slate-600  cursor-pointer hover:bg-slate-200 p-1 rounded-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                {/**User's profile ,and fonctionnality */}
                <div className="text-xs text-slate-500 p-2 flex items-center space-x-2">
                    <svg onClick={() => alert("Cette fonctionnalité n'est pas disponible")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12 cursor-pointer fill-slate-300">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                    </svg>

                    <ul className=" items-center w-32  space-y-1 " onClick={() => alert("Cette fonctionnalité n'est pas disponible")}>
                        <li onClick={() => alert("Cette fonctionnalité n'est pas disponible")} className=" cursor-pointer text-sm font-semibold text-slate-600 text-center">Dan ELENGA</li>
                        <div className="flex items-center cursor-pointer hover:bg-slate-300 transition ease-in-out duration-300  hover:border-slate-400 bg-opacity-50 justify-center space-x-1 p-2 rounded-2xl border-2 w-32">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                </svg>

                            </li>
                            <li className="text-sm font-semibold">Anyone</li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </li>
                        </div>
                    </ul>
                </div>

                {/**Body text */}

                <div className="p-4 text-sm">
                    <form onSubmit={handlesubmit}>
                        <textarea name="text" id="" value={createPost} cols="70" rows="5" placeholder="What do you want to talk about ?" className="border-none placeholder-slate-500 p-3 focus:outline-none outline-none" onChange={handlechange}></textarea>


                        <div className="mt-2  flex justify-end">
                            <div className="px-2">
                                <button className=" text-white p-2 rounded-md bg-[#004182] hover:bg-blue-800 w-16 transition ease-linear duration-100">Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )



    return (
        <div className="text-sm">
            <div className="grid  grid-cols-8 gap-4">

                {/***Left Sidebar...  */}

                <LeftSidebar />
                {/***Content post , story and publication...  */}
                <div className="col-span-4 mt-6 p-1">

                    {/***Primary Section...  */}
                    <div className="bg-white rounded-md shadow px-2 ">

                        {/***Modal Section...  */}

                        { tooglecreatePost==false? '':Modal}

                        {/***End Modal section...  */}

                        <div className="p-3 flex justify-between items-center">
                            <svg onClick={() => { alert("Le profil utilisateur n'est pour l'instant pas disponible") }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12 fill-slate-400 cursor-pointer">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                            </svg>
                            <button  onClick={ IstooglecreatePost }className="px-4 text-sm  border-2 border-slate-100 w-[26rem] h-12 rounded-3xl text-left font-semibold text-slate-500">Start a post</button>
                        </div>

                        <div className=" px-5 flex justify-between pb-2">

                            <ul onClick={() => { alert("Cette fonctionnalité n'est pas encore disponible !") }} className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-blue-500">
                                    <path fill-rule="evenodd" d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd" />
                                </svg>

                                <div>
                                    <li className="font-semibold text-slate-500 text-sm">Photo</li>
                                </div>
                            </ul>

                            <ul onClick={() => { alert("Cette fonctionnalité n'est pas encore disponible !") }} className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-green-600">
                                    <path fill-rule="evenodd" d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" />
                                </svg>



                                <div>
                                    <li className="font-semibold text-slate-500 text-sm">Video</li>
                                </div>
                            </ul>

                            <ul onClick={() => { alert("Cette fonctionnalité n'est pas encore disponible !") }} className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 fill-yellow-600">
                                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                                    <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                                </svg>
                                <div>
                                    <li className="font-semibold text-slate-500 text-sm">Event</li>
                                </div>
                            </ul>

                            <ul onClick={IstooglecreatePost} className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
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

                    {/***Seconde section...  */}
                    <CardArticle isOpen={Hide} />
                </div>
                {/***Right Sidebar...  */}
                <RightSidebar />
            </div>
        </div>
    )
}