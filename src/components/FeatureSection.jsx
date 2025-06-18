import React from 'react';

const features = [
    {
        title: "Choice Of Listing Templates",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis et nisl eget vehicula.",
        icon: "fas fa-cogs",
        link: "#"
    },
    {
        title: "Advanced Search",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis et nisl eget vehicula.",
        icon: "fas fa-search",
        link: "#"
    },
    {
        title: "Powerful Filters",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis et nisl eget vehicula.",
        icon: "fas fa-filter",
        link: "#"
    }
];

const FeatureSection = () => {
    return (
        <section className="relative bg-cover bg-center bg-fixed py-20 text-black" style={{ backgroundImage: 'url(/images/bg-about.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-5xl font-extrabold text-center text-white mb-12">
                    Explore Our Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white text-center p-10 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="text-4xl text-primary mb-4">
                                <i className={feature.icon}></i>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-700 mb-6">{feature.description}</p>
                            <a href={feature.link} className="text-primary font-semibold hover:underline">
                                Read more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
