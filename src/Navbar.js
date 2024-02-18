import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex z-40 w-full h-auto items-center justify-center sticky top-0 inset-x-0 backdrop-blur-lg backdrop-saturate-150 bg-blue-500 text-gray-900">
            <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1024px]">
                <ul className="flex gap-4 h-full flex-row flex-nowrap items-center justify-start flex-grow basis-0">
                    <li>
                        <a href="/" className="flex items-center justify-start bg-transparent no-underline whitespace-nowrap box-border font-medium text-lg">
                            <svg fill="none" height="31" viewBox="0 0 45 41" width="35" xmlns="http://www.w3.org/2000/svg">
                                <mask height="40" id="mask0_97_234" maskUnits="userSpaceOnUse" width="45" x="0" y="1">
                                    <path d="M0 1.61719H44.3638V30.9309L20.049 40.8976L0 31.5172V1.61719Z" fill="white"></path>
                                </mask>
                                <g mask="url(#mask0_97_234)">
                                    <path clipRule="evenodd" d="M5.55701 9.60547V85.7638H21.3731V9.80187L5.55701 9.60547ZM9.40417 13.558V81.9166H17.526V13.7775L9.40417 13.558Z" fill="white" fillRule="evenodd"></path>
                                    <path clipRule="evenodd" d="M23.0829 13.9089V82.1478H31.2047V13.4699L23.0829 13.9089ZM19.2357 9.80198V85.995H35.0518V9.40918L19.2357 9.80198Z" fill="white" fillRule="evenodd"></path>
                                </g>
                                <path d="M7.26672 4.70215L20.0906 4.80998L32.9145 4.70215V7.5519L20.0906 7.65973L7.26672 7.5519V4.70215Z" fill="white"></path>
                                <path d="M11.114 0L20.5182 0.107828L29.9224 0V2.84975L20.5182 2.95758L11.114 2.84975V0Z" fill="white"></path>
                            </svg>
                            <p className="__className_9048be">Mouhami</p>
                        </a>
                    </li>
                </ul>
                <ul className="flex gap-4 h-full flex-row flex-nowrap items-center justify-end flex-grow basis-0">
                    <li className="text-medium whitespace-nowrap box-border list-none font-semibold"><a href="/register">Register</a></li>
                    <li className="text-medium whitespace-nowrap box-border list-none font-semibold"><a href="/login">Login</a></li>
                </ul>
            </header>
            
        </nav>
        
    );
};

export default Navbar;
