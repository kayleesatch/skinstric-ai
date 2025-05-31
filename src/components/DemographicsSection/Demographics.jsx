import React, { useState, useEffect } from 'react';
import axios from "axios";
import Sidebar from './Sidebar';
import CenterDisplay from './CenterDisplay';
import PredictionItem from './PredictionItem';
import PredictionList from './PredictionList';

export default function Demographics({ base64Image }) {
    const [selectedCategory, setSelectedCategory] = useState("race");
    const [predictions, setPredictions] = useState({ race: {}, age: {}, gender: {} });
    const [actualValue, setActualValue] = useState({ race: "", age: "", gender: ""});
    const [loading, setLoading] = useState(true);

    const selectedPrediction = predictions?.[selectedCategory];

    useEffect(() => {
        const base64Image = "base64_encoded_string";
        
        axios
            .post("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
                    { image: base64Image }
            )
            .then((res) => {
                setPredictions(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching demographics:", err);
                setLoading(false);
            });
    }, [base64Image]);

    const handleSelect = (value) => {
        setActualValue((prev) => ({ ...prev, [selectedCategory]: value }));
    };

    return (
       <div className='flex flex-col h-screen w-full bg-white'>

        <div className='p-6'>
            <p className='text-xs text-gray-500 uppercase'>A.I. Analysis</p>
            <h2 className='text-6xl font-bold uppercase'>Demographics</h2>
            <p className='text-xs text-gray-500 mt-1 uppercase'>Predicted Age & Race</p>
        </div>

        <div className='flex flex-grow'>

            <Sidebar 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                />
            <CenterDisplay 
                selectedCategory={selectedCategory}     
                actualValue={actualValue[selectedCategory]}
                selectedPrediction={selectedPrediction} 
                />
            <PredictionItem
                selectedCategory={selectedCategory}
                predictions={predictions[selectedCategory] || {}}
                actualValue={actualValue[selectedCategory]}
                loading={loading}
                onSelect={handleSelect}
                />
        </div>
       </div> 
    );
}