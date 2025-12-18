import ProgressBar from "./ProgressBar"
import InputProgress from "./InputProgress"
import { useState } from "react"

export default function ProgressContainer() {

    const [progress, setProgress] = useState(0);

    const onProgressChange = (value) => {
      setProgress(value);
    };

    return (
        <div className="flex-col flex w-[320px] mx-auto mt-12 p-4 bg-white shadow-lg rounded-xl">
            <h1 className="self-center font-medium text-2xl mb-4 mt-2 w-fit">Progress Bar</h1>
            <ProgressBar progress={progress} />
            <InputProgress onProgressChange={onProgressChange} />
        </div>            
    )
}