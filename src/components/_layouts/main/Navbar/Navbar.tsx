import { AiOutlineSetting, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { TbExternalLink, TbMessageReport } from "react-icons/tb"
import { FiHelpCircle } from "react-icons/fi"
import { MdOutlineNotifications } from "react-icons/md"
import { BiSearchAlt, BiMessageAltDetail } from "react-icons/bi"
import { useState } from "react";

const Navbar = () => {

  const [showUser, setShowUser] = useState(true);
  const [showMessage, setShowMessage] = useState(true);

  return (
  <>
    <nav className="bg-white rounded-lg shadow shadow-slate-200 border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-3.5">
        <div className="flex items-center gap-5">
          <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="text-sm flex items-center py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                  <TbExternalLink className="mr-1 text-lg" />
                  Shortcut
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <TbMessageReport className="mr-1 text-lg" />
                  Report
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <FiHelpCircle className="mr-1 text-lg" />
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative me-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BiSearchAlt className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input type="text" id="serach" className="bg-gray-100 border-0 text-gray-900 text-sm rounded-2xl focus:ring-teal-500 block w-full pl-10 p-1.5" placeholder="Search anything" />
          </div>
          <div className="flex me-6 justify-end items-center gap-5 ">
            <div className="relative">
              <button onClick={() => {setShowMessage(!showMessage)}} type="button" className="p-1 bg-slate-100 rounded-md hover:bg-slate-200 duration-100 ">
                <BiMessageAltDetail className="text-slate-500 text-xl" />
                <span className="absolute top-0 -right-1 animate-pulse  rounded-full bg-red-400 h-2 w-2"></span>
              </button>
              <div className={`${ showMessage ? "hidden": "" } absolute -right-5 z-50 my-6 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 duration-75 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      <AiOutlineSetting className="me-2" />
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" className="relative p-1 bg-slate-100 rounded-md hover:bg-slate-200 duration-100 ">
              <MdOutlineNotifications className="text-slate-500 text-xl" />
              <span className="absolute top-0 -right-1 animate-pulse  rounded-full bg-teal-400 h-2 w-2"></span>
            </button>
          </div>
          <div className="relative">
            <div onClick={() => {setShowUser(!showUser)}} className="flex items-center cursor-pointer">
              <div className="me-3 text-end">
                <span className="block text-sm text-gray-900 dark:text-white">Tedy Hidayat</span>
                <span className="block text-xs  text-gray-500 truncate dark:text-gray-400">theightdev@gmail.com</span>
              </div>
              <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <img className="w-8 h-8 rounded-full" src="https://picsum.photos/200/200" alt="user photo" />
              </button>
            </div>
            <div className={`${ showUser ? "hidden": "" } absolute right-0 z-50 my-5 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
              <div className="px-4 py-3 w-36">
                <span className="block text-xs text-gray-900 dark:text-white">Tedy Hidayat</span>
                <span className="block text-xs text-gray-500 truncate dark:text-gray-400">Administrator</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 duration-75 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <AiOutlineSetting className="me-2" />
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 duration-75 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <AiOutlineUser className="me-2" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 duration-75 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <AiOutlineLogout className="me-2" />
                    Sign
                  out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar