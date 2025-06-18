import { Close, Menu } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const handleSubmit = () => {
        navigate("/welcome");
    };

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="shadow-lg w-full fixed top-0 left-0 z-[100] border-b border-gray-400 py-5 bg-white">
            <div className="md:flex items-center justify-between py-1 md:px-16 px-7">

                {/* Logo + Mobile Right Controls */}
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <img
                        src="/images/logo-houzez.png"
                        alt="logo"
                        className="w-[120px] cursor-pointer"
                        onClick={() => navigate("/")}
                    />

                    {/* Mobile view - login icon and menu toggle */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <button onClick={handleSubmit} className="text-[#5b8b8b] p-2">
                            <PersonIcon fontSize="large" />
                        </button>
                        <div onClick={() => setOpen(!open)} className="cursor-pointer text-black">
                            {open ? <Close /> : <Menu />}
                        </div>
                    </div>
                </div>

                {/* Nav Links */}
                <ul
                    className={`md:flex md:items-center absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in z-[10] ${open ? "top-20" : "top-[-490px]"}`}
                >
                    {["home", "properties", "about", "property", "contact"].map((item, idx) => (
                        <li key={idx} className="md:ml-8 md:my-0 my-7 font-semibold">
                            <Link
                                to={`/${item === "home" ? "" : item}`}
                                className="hover:text-[#5b8b8b] duration-500 capitalize"
                            >
                                {t(item)}
                            </Link>
                        </li>
                    ))}

                    {/* Language Dropdown for mobile */}
                    <li className="md:hidden my-3">
                        <select
                            value={i18n.language}
                            onChange={changeLanguage}
                            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none"
                        >
                            <option value="en">🇬🇧 English</option>
                            <option value="fr">🇫🇷 French</option>
                        </select>
                    </li>

                    {/* Login/Signup buttons for mobile */}
                    <li className="md:hidden my-4 flex flex-col gap-3">
                        <button
                            onClick={handleSubmit}
                            className="bg-[#5b8b8b] text-white font-semibold py-2 px-5 rounded-xl shadow"
                        >
                            {t("login")}
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="bg-white text-[#5b8b8b] border border-[#5b8b8b] font-semibold py-2 px-5 rounded-xl shadow"
                        >
                            {t("signup")}
                        </button>
                    </li>
                </ul>

                {/* Desktop Right Controls */}
                <div className="hidden lg:flex items-center gap-4">
                    {/* Language Dropdown */}
                    <select
                        value={i18n.language}
                        onChange={changeLanguage}
                        className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none"
                    >
                        <option value="en">🇬🇧 English</option>
                        <option value="fr">🇫🇷 French</option>
                    </select>

                    {/* Login/Signup Buttons */}
                    <button
                        onClick={handleSubmit}
                        className="text-lg bg-[#5b8b8b] border-[#5b8b8b] hover:bg-transparent hover:text-black border hover:border-black transition-all text-white font-semibold py-2 px-5 rounded-xl shadow-md"
                    >
                        {t("login")}
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="text-lg bg-white text-[#5b8b8b] border border-[#5b8b8b] hover:bg-[#5b8b8b] hover:text-white transition-all font-semibold py-2 px-5 rounded-xl shadow-md"
                    >
                        {t("signup")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
