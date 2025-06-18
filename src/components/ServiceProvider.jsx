import React from "react";
import { useTranslation } from "react-i18next";

const ServiceProvider = () => {
    const { t } = useTranslation();

    const testimonials = [
        {
            name: "Dr. Sarah L., Assistant Professor",
            image: "/images/client-02.png",
            text: t("testimonialsService.t1"),
        },
        {
            name: "Dr. Ahmed K., Senior Researcher",
            image: "/images/client-05.png",
            text: t("testimonialsService.t2"),
        },
        {
            name: "Priya S., Ph.D. Student",
            image: "/images/client-03.png",
            text: t("testimonialsService.t3"),
        },
        {
            name: "Emily T., Ph.D. Candidate",
            image: "/images/client-06.png",
            text: t("testimonialsService.t4"),
        },
        {
            name: "Mark R., Research Scholar",
            image: "/images/client-02.png",
            text: t("testimonialsService.t5"),
        },
        {
            name: "Dr. John D., Visiting Faculty",
            image: "/images/client-05.png",
            text: t("testimonialsService.t6"),
        },
    ];

    return (
        <section className="bg-white py-20 border-b border-gray-200">
            <div className="text-center px-6 mb-12">
                <h1 className="text-3xl font-semibold">{t("testimonialsService.title")}</h1>
                <p className="max-w-xl mx-auto text-gray-600 mt-2">
                    {t("testimonialsService.subtitle")}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-6 pt-20 relative text-center flex flex-col items-center"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover absolute -top-10"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 mt-2">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 my-3">{testimonial.text}</p>
                        <img src="/images/stars.png" alt="Stars" className="h-4" />
                    </div>

                ))}
            </div>

            <div className="flex justify-center mt-12">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition">
                    {t("testimonialsService.viewAll")}
                </button>
            </div>
        </section>
    );
};

export default ServiceProvider;
