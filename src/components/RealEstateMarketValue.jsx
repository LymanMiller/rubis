import React from "react";
import {
    PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

const COLORS = ["#CBD5C0", "#6B9080", "#004643"];

const RealEstateMarketValue = () => {
    const { t } = useTranslation();

    const pieData = [
        { name: t("realEstate.owned"), value: 35 },
        { name: t("realEstate.rented"), value: 45 },
        { name: t("realEstate.sold"), value: 20 },
    ];

    const barData = [
        { name: t("realEstate.below75k"), value: 20 },
        { name: t("realEstate.between75k100k"), value: 38 },
        { name: t("realEstate.between100k200k"), value: 30 },
        { name: t("realEstate.between200k500k"), value: 35 },
        { name: t("realEstate.above500k"), value: 24 },
    ];

    return (
        <div className="px-4 py-20 bg-white text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {t("realEstate.title")}
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-12">
                {t("realEstate.description")}
            </p>

            <div className="grid md:grid-cols-2 gap-10 justify-center items-center max-w-6xl mx-auto">
                {/* Housing Stock Chart */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">{t("realEstate.housingStock")}</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={90}
                                fill="#8884d8"
                                paddingAngle={2}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Household Incomes Chart */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">{t("realEstate.householdIncome")}</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={barData}>
                            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#6B9080" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default RealEstateMarketValue;
