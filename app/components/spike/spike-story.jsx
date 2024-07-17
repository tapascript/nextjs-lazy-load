"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const LazySpike = dynamic(() => import("./spike").then((mod) => mod.LazySpike), {
    loading: () => <h1>Loading Spike&apos;s Story...</h1>,
});

function SpikeStory() {
    const [shown, setShown] = useState(false);

    return (
        <div className="flex flex-col m-8 w-[300px]">
            <h2 className="text-xl my-1">Demonstrating <strong>Named Export</strong></h2>
            <button
                className="bg-slate-600 text-white rounded p-1"
                onClick={() => setShown(!shown)}
            >
                Load 🦮 Spike&apos;s Story
            </button>

            {shown && <LazySpike />}
        </div>
    );
}

export default SpikeStory;