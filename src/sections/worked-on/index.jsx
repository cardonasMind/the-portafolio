import react from "react";

import WorkCard from "./work-card";

export default function WorkedOn() {
    return (
        <div className="my-16 mx-16">
            <h1 className="text-6xl mb-8 text-white border-b-4 border-white">I've worked on</h1>
            
            <div className="grid grid-cols-4 gap-4">
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </div>
        </div>
    )
}