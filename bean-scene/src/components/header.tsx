"use client"
import React, { useEffect, useState } from "react";

const Header = () => {
    const menu = ["Home", "Menu", "About Us", "Contact Us"];
    const [show, setShow] = useState(false)

    return (
        <header className="text-white absolute w-full z-30">
            <div className="container flex items-center justify-between md:justify-start py-8 relative">
                <h1 className="font-bold text-xl font-clicker text-[35px] leading-none">Bean Scene</h1>

                <ul className="flex flex-row gap-x-16 md:hidden">
                    {menu.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>

                {
                    show && (
                        <ul className="flex flex-row gap-x-16 md:absolute md:flex md:flex-col gap-3 md:w-full md:bg-black md:py-10 md:top-full left-0 md:z-40 md:px-10">
                            {menu.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    )
                }


                <button onClick={() => setShow(!show)} className="hidden md:flex flex-col gap-2 *:inline-block *:w-full *:h-1 *:bg-white w-7 ml-auto mr-4">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="flex space-x-4 items-center">
                    <p>Sign In</p>
                    <button className="text-center justify-center w-[100px] h-11 rounded-3xl bg-[#F9C06A]">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
