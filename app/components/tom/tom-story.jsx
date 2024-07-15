"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const LazyTom = dynamic(() => import("./tom"), {
    loading: () => <h1>Loading Tom's Story...</h1>,
});

function TomStory() {
    const [shown, setShown] = useState(false);

    return (
        <div className="flex flex-col m-8 w-[300px]">
            <h2 className="text-xl my-1">Demonstrating <strong>dynamic</strong></h2>
            <button
                className="bg-blue-600 text-white rounded p-1"
                onClick={() => setShown(!shown)}
            >
                Load Tom's Story
            </button>

            {shown && <LazyTom />}
        </div>
    );
}

export default TomStory;