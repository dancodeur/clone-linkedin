import { useState } from "react";
let id=0;

export default function CardArticle(props) {

    //state
    const [toggleCard, setToggleCard] = useState(false);
    const [toggleEdit, setToggleEdit] = useState(false);
    const [toggleComment, setToggleComment] = useState(false);
    const [Like, setLike] = useState(0);
    const H = new Date();
    const D = H.getUTCHours() + 'h';

    const [comment, setComment] = useState([
        { id:id++, comment:"No Bad !", auteur:'Anonymous user' },
    ]);
    const [addComment, setAddComment]=useState('');

    const ArticlesSettingsModal = (

        <div className="p-3 w-80 bg-white shadow rounded-md absolute top-10 right-8">
            <div className=" space-y-2">
                <ul onClick={() => setToggleEdit(!toggleEdit)} className=" hover:bg-gradient-to-l from-slate-100 to-slate-50 hover:transition-colors hover:animate-pulsetext-sm font-semibold px-2 py-2 cursor-pointer flex items-center justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-slate-600">
                        <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                    </svg>

                    <li>Edit</li>
                </ul>

                <hr />
                <ul className=" hover:bg-gradient-to-l from-slate-100 to-slate-50 hover:transition-colors hover:animate-pulse text-sm font-semibold px-2 py-2 cursor-pointer flex items-center justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-slate-600">
                        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                    </svg>


                    <li>Delete</li>
                </ul>
            </div>
        </div>
    );

    const Edit = (
        <div className="p-4 text-sm mt-3">
            <form >
                <textarea name="text" id="" value="" cols="56" rows="3" placeholder="Edit..." className="border-none placeholder-slate-500 p-3 bg-slate-50 rounded focus:outline-none outline-none"></textarea>


                <div className="flex justify-end">
                    <div className="px-2">
                        <button className=" text-white p-2 rounded-md bg-[#004182] hover:bg-blue-800 w-16 transition ease-linear duration-100">Post</button>
                    </div>
                </div>
            </form>
        </div>
    );

    const handlesubmit = (e) => {
        e.preventDefault();

        const data = [...comment];
        const id = new Date().getTime;
        const autor = "anonymous";
        const com = addComment;

        if (addComment) {
            data.push(id, com, autor);
            setComment(data);

            setAddComment("");
        }else{

            alert("Vous n'avez rien écrit en commentaire");
        }


    }

    const handlechange = (e) => {
        setAddComment(e.target.value);
    }

    const Comment = (
        <div className="p-4 text-sm mt-3">
            <form onSubmit={handlesubmit}>
                <textarea name="text" id="" cols="60" rows="2" onChange={handlechange} value={addComment} placeholder="Comment..." className="border-none placeholder-slate-500 p-3 bg-slate-50 rounded focus:outline-none outline-none"></textarea>


                <div className="flex justify-end">
                    <div className="px-2 mt-2">
                        <button className=" text-white p-2 rounded-md bg-[#004182] hover:bg-blue-800 w-20 transition ease-linear duration-100">Comment</button>
                    </div>
                </div>
            </form>

            <div className="mt-1 h-32 overflow-visible">
                <ul className="space-y-2">
                    {comment.map((comments) => (
                        <li key={comments.id} className=" p-2 mt-2 rounded bg-[#f3f2ef]">
                            <div className=" flex items-center  px-4">

                                <svg onClick={() => alert("Cette fonctionnalité n'est pas disponible")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10 fill-slate-400 cursor-pointer">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                                </svg>

                                <div className="flex space-x-2 items-center">
                                    <ul>
                                        <li className="font-semibold text-slate-600">{comments.auteur}</li>
                                        <li className="text-xs text-slate-500">{D}</li>
                                    </ul>
                                </div>
                            </div>

                            <hr className="mt-1" />
                            <div className="mt-2 px-6 flex justify-start">
                                <p className="text-sm text-slate-700">{comments.comment}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

    //behavior


    return (

        <div className="bg-white rounded-md border-slate-300  mt-5 shadow mb-3">
            <div>
                {/***Card Header... content : Profil Name and many others information about users profils  */}
                <div className="flex justify-between relative">
                    <div className="p-3 flex space-x-2 items-center">
                        <svg onClick={() => alert("Cette fonctionnalité n'est pas encore disponible")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={props.isOpen == false ? 'w-9 h-9 fill-slate-300 cursor-pointer' : 'hidden'}>
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                        </svg>
                        <ul>
                            <li onClick={() => alert("Cette fonctionnalité n'est pas encore disponible")} className={props.isOpen == true ? 'hidden' : 'font-bold text-sm cursor-pointer'}>His Name</li>
                            <li className={props.isOpen == true ? 'hidden' : 'text-xs text-slate-500'} >His Work</li>
                            <ul className={props.isOpen == true ? 'hidden' : 'flex items-center space-x-1'}>
                                <li className="text-xs text-slate-400">3h</li>
                                <li>
                                    <svg onClick={() => alert("Cette fonctionnalité n'est pas encore disponible")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4  fill-slate-400 cursor-pointer">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.503.204A6.5 6.5 0 117.95 3.83L6.927 5.62a1.453 1.453 0 001.91 2.02l.175-.087a.5.5 0 01.224-.053h.146a.5.5 0 01.447.724l-.028.055a.4.4 0 01-.357.221h-.502a2.26 2.26 0 00-1.88 1.006l-.044.066a2.099 2.099 0 001.085 3.156.58.58 0 01.397.547v1.05a1.175 1.175 0 002.093.734l1.611-2.014c.192-.24.296-.536.296-.842 0-.316.128-.624.353-.85a1.363 1.363 0 00.173-1.716l-.464-.696a.369.369 0 01.527-.499l.343.257c.316.237.738.275 1.091.098a.586.586 0 01.677.11l1.297 1.297z" clip-rule="evenodd" />
                                    </svg>

                                </li>
                            </ul>
                        </ul>
                    </div>

                    <div className="pt-[0.6rem] pr-3">
                        <svg onClick={() => setToggleCard(!toggleCard)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7 fill-slate-500 cursor-pointer ">
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                        </svg>
                    </div>
                    {/*** Modal Article option Delete/Update...  */}
                    {toggleCard == false ? '' : ArticlesSettingsModal}
                    {/*** Here body header and article text...  */}

                </div>
                {/*** Here body header and article text...  */}
                <div className="px-4 pb-1">
                    <div className="p-1">
                        <p className="text-sm text-slate-600">The text here...</p>
                    </div>
                </div>
                {/***Here Article Picture or Video...  */}
                <div>
                    <img onClick={() => { alert("Cette fonctionnalité n'est pas disponible") }} src="MacBook Pro 16_ - 1.png" alt="post" className="bg-cover" />
                </div>
                {/***Here Articles  compters : Comments , like , report */}
                <div className="mt-2 px-4">
                    <div className=" pb-1 border-b-2 flex justify-between ">
                        <ul className="flex  space-x-2 items-center">
                            <li>
                                <svg onClick={() => { alert("Cette fonctionnalité n'est pas disponible") }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={Like > 0 ? "w-4 h-4 stroke-blue-500 stroke-2 focus:animate-bounce cursor-pointer" : "w-4 h-4 stroke-slate-400 cursor-pointer"} >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                </svg>
                            </li>

                            <span className="text-xs text-slate-500">{Like}</span>
                        </ul>

                        <div className="flex  space-x-2">
                            <ul className="flex  space-x-2 items-center">
                                <span className="text-xs text-slate-500">{comment.length}</span>
                                <span className="text-xs text-slate-500">comment(s)</span>
                            </ul>

                            <ul className="flex  space-x-2 items-center">
                                <span className="text-xs text-slate-500">0</span>
                                <span className="text-xs text-slate-500">Reports</span>
                            </ul>
                        </div>
                    </div>
                    {/***Here Articles  Actions : Comments , like , report */}
                    <div className="px-4 pt-1 pb-2">
                        <div className="flex justify-between">
                            <ul onClick={() => setLike(Like + 1)} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                </svg>

                                <li className="text-sm text-slate-500 font-semibold">Like</li>
                            </ul>

                            <ul onClick={() => setToggleComment(!toggleComment)} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer ">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>

                                <li className="text-sm text-slate-500 font-semibold">comment</li>
                            </ul>

                            <ul onClick={() => alert("Cette fonctionnalité n'est pas encore disponible")} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                </svg>


                                <li className="text-sm text-slate-500 font-semibold">Repost</li>
                            </ul>

                            <ul onClick={() => alert("Cette fonctionnalité n'est pas encore disponible")} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>

                                <li className="text-sm text-slate-500 font-semibold">send</li>
                            </ul>
                        </div>

                        {/**Section Edit */}
                        {toggleEdit == true ? Edit : ''}
                        {/**Section Comment */}

                        {toggleComment == true ? Comment : ''}

                    </div>
                </div>

            </div>
        </div>
    )
}