import React, { useState, useEffect } from 'react';
import axios from "axios";
import Sidebar from './Sidebar';
import CenterDisplay from './CenterDisplay';
import PredictionList from './PredictionList';
import BottomBanner from './BottomBanner';
import { useLocation } from 'react-router-dom';
import RandomPredictions from '../RandomPredictions';

export default function Demographics() {

    const location = useLocation()
    console.log("[LOG 1] Full location.state:", location.state);

    const base64Image = location?.state?.base64Image;
    const passedPredictions = location?.state?.predictions;
    console.log("[LOG 2] base64Image snippet:", base64Image?.slice?.(0, 50));
    console.log("[LOG 2.5] passed predictions:", passedPredictions);

    const [selectedCategory, setSelectedCategory] = useState("race");
    const [predictions, setPredictions] = useState(passedPredictions || { race: {}, age: {}, gender: {} });
    const [actualValue, setActualValue] = useState({ race: "", age: "", gender: ""});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (passedPredictions) {
            console.log("[LOG 3.5] using predictions from Upload");
            setPredictions(passedPredictions);
            setLoading(false);
        } else if (base64Image) {
            console.log("[LOG 4] Sending request to API...");
            setLoading(true);
            axios
                .post("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
                        { image: base64Image },
                        { headers: { "Content-Type": "application/json" } }
                )
                .then((res) => {
                    console.log('{LOG 5] API response:', res.data);
                    const newPredictions = res.data.data;
                    setPredictions(newPredictions);

                    const randomValues = RandomPredictions(newPredictions);
                    setActualValue(randomValues);

                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error", err);
                    setLoading(false);
                });
            }
        }, [base64Image, passedPredictions]);

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
                actualValue={actualValue} 
                predictions={predictions}
                />
            <CenterDisplay 
                actualValue={actualValue[selectedCategory]}
                selectedPrediction={predictions[selectedCategory]}
                onClick={handleSelect}
                loading={loading}
                />
            <PredictionList
                predictions={predictions}
                selectedCategory={selectedCategory}
                onSelectPrediction={(selectedCategory, value) => {
                    setActualValue((prev) => ({ 
                        ...prev, 
                        [selectedCategory]: value }));
                }}
                actualValue={actualValue}
            />

            <BottomBanner />
        </div>
       </div> 
    );
}