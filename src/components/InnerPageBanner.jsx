import React from "react";
import { useTranslation } from "react-i18next";

const InnerPageBanner = ({ titleKey }) => {
    const { t } = useTranslation();

    return (
        <div
            className="bg-gray-900 text-white mt-[95px] py-32 text-center relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url('/images/property2.jpg')` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-80 z-0"></div>
            <div className="relative z-10">
                <h1 className="text-4xl font-bold">{t(titleKey)}</h1>
                <p className="mt-2 text-lg text-gray-300">
                    {t("innerBanner.welcome", { page: t(titleKey) })}
                </p>
            </div>
        </div>
    );
};

export default InnerPageBanner;
