import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SearchBar from "../components/searchbar";
import { HiHome } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { FaBalanceScale } from 'react-icons/fa';
import { MdOutlineSportsFootball } from 'react-icons/md';
import { IoFastFoodSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
    return (
        <div className="bg-base-100 shadow-sm px-4 md:px-8 py-2">
            {/* Top row: Logo (left) + Search bar (right) */}
            <div className="mx-2 max-w-screen">
                <div className="flex items-center justify-between gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 normal-case text-xl md:text-2xl shrink-0"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
                        />
                    </Link>

                    {/* Wider search on larger screens */}
                    <div className="hidden lg:flex flex-1 justify-end">
                        <div className="w-full max-w-xl md:max-w-2xl">
                            <SearchBar />
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1"><GiHamburgerMenu /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li>
                                    <Link to="/category/home" className="capitalize"><HiHome /> home</Link>
                                </li>
                                <li>
                                    <Link to="/category/world" className="capitalize"><BiWorld /> world</Link>
                                </li>
                                <li>
                                    <Link to="/category/us" className="uppercase"><LiaFlagUsaSolid /> us</Link>
                                </li>
                                <li>
                                    <Link to="/category/politics" className="capitalize"><FaBalanceScale /> politics</Link>
                                </li>
                                <li>
                                    <Link to="/category/sports" className="capitalize"><MdOutlineSportsFootball /> sports</Link>
                                </li>
                                <li>
                                    <Link to="/category/food" className="capitalize"><IoFastFoodSharp /> foods</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom row: Category links (centered) */}
                <div className="flex justify-center mt-3 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-sm md:text-base font-medium">
                        <li>
                            <Link to="/category/home" className="capitalize"><HiHome /> home</Link>
                        </li>
                        <li>
                            <Link to="/category/world" className="capitalize"><BiWorld /> world</Link>
                        </li>
                        <li>
                            <Link to="/category/us" className="uppercase"><LiaFlagUsaSolid /> us</Link>
                        </li>
                        <li>
                            <Link to="/category/politics" className="capitalize"><FaBalanceScale /> politics</Link>
                        </li>
                        <li>
                            <Link to="/category/sports" className="capitalize"><MdOutlineSportsFootball /> sports</Link>
                        </li>
                        <li>
                            <Link to="/category/food" className="capitalize"><IoFastFoodSharp /> foods</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
