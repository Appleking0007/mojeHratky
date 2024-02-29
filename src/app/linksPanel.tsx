'use client'
import {FC, useState} from "react";

export const LinksPanel: FC = () => {
    const [menuHidden,setMenuHidden] = useState(true)
    return (
        <div className="ml-[170px] mr-[170px] mt-[92px] flex flex-row bg-green-200 md:bg-gray-500 lg:bg-red-600 xl:bg-blue-600 2xl:bg-white content-start justify-between">
            <div className="mt-10 ml-10 flex flex-row h-16 grid gap-9 content-start">
                <button className="hidden lg:flex :">Home</button>
                <button className="hidden lg:flex">Contacts</button>
                <button className="hidden lg:flex">Categories</button>
                <button className="hidden lg:flex">Zobraz Menu</button>
            </div>
            <button className="mt-10 mr-10 hidden lg:flex">Sign in</button>
            <button className="mt-10 mr-10 hidden hidden lg:flex" onClick={() => setMenuHidden(!menuHidden)}>click</button>
            {
                <div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#"
                               className="hidden block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#"
                               className="hidden block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#"
                               className="hidden block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#"
                               className="hidden block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                out</a>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
}