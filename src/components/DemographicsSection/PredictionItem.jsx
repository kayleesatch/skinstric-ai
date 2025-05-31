import React from "react";

export default function PredictionItem({
    predictions = {},
    selectedCategory,
    actualValue,
    onSelect,
}) {
    const entries = Object.entries(predictions[selectedCategory] || {});

    const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

    return (
        <div className="w-1/4 p-6 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Predictions</h2>
            {sortedEntries.map(([key, value]) => (
                <div
                    key={key}
                    className={`cursor-pointer p-2 text-sm rounded-lg border mt-2 hover:bg-black hover:text-white
                        ${actualValue === key ? "bg-black text-white" : ""
                    }`}
                    onClick={() => onSelect(key)}
                >
                    {key.charAt(0).toUpperCase() + key.slice(1)} - {(value * 100).toFixed(2)}%
                </div>
            ))}
        </div>
    );
}