import { useState } from "react";

export default function MovingDot() {

const [position, setPosition] = useState({ x: 0, y: 0 });

function handlePointerMove(event) {
    setPosition({
        x: event.clientX,
        y: event.clientY
    });
}

return (
    <div onPointerMove={handlePointerMove} className="border m-4 h-96 border-amber-950 roundded bg-pink-200">
        <div style={{position: 'absolute', left: position.x + 'px', top: position.y + 'px' }} className="bg-pink-800 w-4 h-4 rounded-full position"></div>
    </div>
)}

