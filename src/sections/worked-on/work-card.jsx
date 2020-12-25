import react from "react";

export default function WorkCard() {
    return (
        <div className="bg-white rounded overflow-hidden">
            <img src="/images/sections/hero.jpg" />
            
            <div className="py-2 px-4">
                <h2>Title</h2>
                <p>Short project description</p>
            </div>
        </div>
    )
}