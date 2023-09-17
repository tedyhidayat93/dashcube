import { Link } from "react-router-dom"
import { RxDashboard } from "react-icons/rx";
import { BiTask, BiRun, BiUniversalAccess } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { PiUsersBold } from "react-icons/pi";
import { LiaDotCircleSolid } from "react-icons/lia";
import { BsShieldLock } from "react-icons/bs";
import { TbBrandMonday } from "react-icons/tb"
import { AiOutlineSetting, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";


const Layout = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState("");

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 600 && showSidebar) {
                setShowSidebar(false);
            }
            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [showSidebar]);

    return (
        <>
            <Header />
            <div className="main-app p-3 h-screen">
                <div className="flex gap-3">
                    <div id="wrapper-sidebar" className={`${ showSidebar ? "basis-2/12": "basis-20" } duration-100 relative bg-white pt-2 pb-0 h-[97vh] rounded-lg shadow-xl shadow-slate-200 overflow-hidden`}>
                        <div className={`flex items-center gap-2 ${ showSidebar ? "justify-between": "justify-center"} sidemenu-logo p-3 flex align-center`}>
                            <a href="" className={`flex items-center gap-2 ${ showSidebar ? "": "hidden"}`}>
                                <div className="flex items-center justify-center bg-teal-200 w-8 h-8 rounded-full">
                                    <TbBrandMonday className="text-xl text-teal-500" />
                                </div>
                                <h5 className={`font-bold text-teal-500`}>DASHCUBE</h5>
                            </a>

                            <button type="button" id="toogle-sidebar"
                                onClick={() => {setShowSidebar(!showSidebar)}}
                                className="p-2 bg-slate-50 rounded-md text-slate-400 hover:bg-slate-50 hover:text-teal-400 duration-100 ">
                                { showSidebar ? <HiChevronDoubleLeft className="" /> : <HiChevronDoubleRight className="text-teal-400" />}
                            </button>
                        </div>

                        <hr className="opacity-40" />

                        <div id="menu-bar" className={`px-3 pt-3 overflow-y-auto ${ showSidebar ? "max-h-[83vh]": "max-h-[90vh]"}`}>
                            <h6 className={`${showSidebar ? "" : "hidden"} capitalize text-xs text-slate-300 my-2 font-light`}>Main Menu</h6>
                            <Link to="/dashboard" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "dashboard" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('dashboard')}}>
                            <RxDashboard className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Dashboard</span>
                            </Link>
                            <Link to="/task" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "task" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('task')}}>
                            <BiTask className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Task</span>
                            </Link>
                            <Link to="/" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "activity" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('activity')}}>
                            <BiRun className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Activity</span>
                            </Link>
                            <Link to="/" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "visit" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('visit')}}>
                            <MdOutlinePlace className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Visit</span>
                            </Link>
                            <Link to="/" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "report" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('report')}}>
                            <TbReportAnalytics className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Report</span>
                            </Link>

                            <h6 className={`${showSidebar ? "" : "hidden"} capitalize text-xs text-slate-300 my-2 font-light`}>Accessibility</h6>

                            <Link to="/" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "users" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('users')}}>
                            <PiUsersBold className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Users</span>
                            </Link>
                            <Link to="/" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "roles" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('roles')}}>
                            <BsShieldLock className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Roles</span>
                            </Link>
                            <Link to="/" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "permissions" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('permissions')}}>
                            <BiUniversalAccess className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Permissions</span>
                            </Link>
                            <Link to="/" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "settings" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('settings')}}>
                            <FiSettings className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Settings</span>
                            </Link>

                            <hr className="my-5" />

                            <h6 className={`${showSidebar ? "" : "hidden"} capitalize text-xs text-slate-300 my-2 font-light`}>Components</h6>

                            <Link to="/cards" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "cards" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('cards')}}>
                            <LiaDotCircleSolid className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Cards</span>
                            </Link>
                            <Link to="/alerts" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "alerts" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('alerts')}}>
                            <LiaDotCircleSolid className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Alerts</span>
                            </Link>
                            <Link to="/forms" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "forms" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('forms')}}>
                            <LiaDotCircleSolid className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Forms</span>
                            </Link>
                            <Link to="/modals" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "modals" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('modals')}}>
                            <LiaDotCircleSolid className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Modals</span>
                            </Link>
                            <Link to="/lists" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "lists" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('lists')}}>
                            <LiaDotCircleSolid className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Lists</span>
                            </Link>
                            <Link to="/tables" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "tables" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('tables')}}>
                            <LiaDotCircleSolid className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Tables</span>
                            </Link>
                            <Link to="/charts" className={`flex items-center font-normal px-3 py-2 my-1 rounded-md
                                ${ showSidebar ? "": "justify-center" }
                                ${ selectedMenu === "charts" ? "text-white bg-teal-400"
                                : "text-gray-500 hover:pl-4 hover:text-teal-400 duration-100" }`} onClick={()=>
                            {setSelectedMenu('charts')}}>
                            <LiaDotCircleSolid className={`${showSidebar ? "me-2" : "text-xl"}`} />
                            <span className={`${showSidebar ? "" : "hidden"}`}>Charts</span>
                            </Link>
                        </div>

                        <hr className="opacity-40" />

                        <div className={`${ showSidebar ? "": "hidden" } footer-menu absolute bottom-0 flex items-center justify-center w-full gap-3  h-10`}>
                            <a href="#" className="p-1 rounded bg-slate-50 text-slate-500 hover:bg-slate-200 hover:text-slate-700 hover:duraion-200">
                                <AiOutlineSetting />
                            </a>
                            <a href="#" className="p-1 rounded bg-slate-50 text-slate-500 hover:bg-slate-200 hover:text-slate-700 hover:duraion-200">
                                <AiOutlineUser />
                            </a>
                            <a href="#" className="p-1 rounded bg-slate-50 text-slate-500 hover:bg-red-500 hover:text-white hover:duraion-200">
                                <AiOutlineLogout />
                            </a>
                        </div>
                    </div>
                    <div id="wrapper-content" className={`${ showSidebar ? "basis-10/12": "basis-full" } duration-100 bg-white-200`}>
                        <Navbar />
                        <div className=" my-3">
                            <Outlet />
                        </div>
                        {/* <FooterInfo /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;