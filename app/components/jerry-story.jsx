"use client";

import React, { useState, Suspense } from "react";

const LazyJerry = React.lazy(() => import('./jerry'));

function JerryStory() {
    const [shown, setShown] = useState(false);

    return (
        <div className="flex flex-col m-8 w-[300px]">
            <h2 className="text-xl my-1"> Demonstrating <strong>React.lazy()</strong></h2>
            <button
                className="bg-pink-600 text-white rounded p-1"
                onClick={() => setShown(!shown)}
            >
                Load Jerry's Story
            </button>

            {shown && <Suspense fallback={<h1>Loading Jerry's Story</h1>}>
                <LazyJerry />
            </Suspense>}
        </div>
    );
}

export default JerryStory;