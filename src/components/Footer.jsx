import React, { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaArrowUp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="bg-gray-100 pt-16 pb-8 relative text-sm text-gray-700">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                {/* About Site */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">{t("footer.aboutTitle")}</h3>
                    <p>{t("footer.aboutDescription")}</p>
                    <a href="#" className="text-teal-700 font-medium inline-block mt-2 hover:underline">
                        {t("footer.readMore")}
                    </a>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">{t("footer.contactTitle")}</h3>
                    <p className="mb-1">📍 {t("footer.address")}</p>
                    <p className="mb-1">✉️ email@example.com</p>
                    <a href="" className="text-teal-700 font-medium hover:underline">
                        {t("footer.contactLink")}
                    </a>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">{t("footer.newsletterTitle")}</h3>
                    <form className="flex gap-2 mb-2">
                        <input
                            type="email"
                            placeholder={t("footer.emailPlaceholder")}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                        />
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
                            {t("footer.submit")}
                        </button>
                    </form>
                    <p>{t("footer.newsletterDescription")}</p>
                </div>
            </div>

            {/* Socials + Branding */}
            <div className="border-t border-gray-200 mt-12 pt-6 text-center">
                <div className="flex justify-center gap-5 mb-4 text-gray-500 text-xl">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
                <div className="text-teal-700 font-bold text-xl mb-1">houzez</div>
                <p className="text-xs text-gray-500">{t("footer.copyright")}</p>
            </div>

            {/* Back to Top Button */}
            {showTopBtn && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition z-50"
                    aria-label="Back to Top"
                >
                    <FaArrowUp size={18} />
                </button>
            )}
        </footer>
    );
};

export default Footer;
