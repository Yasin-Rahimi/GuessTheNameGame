import { useState } from "react";

export default function InputProgress({ onProgressChange }) {
  const [progress, setProgress] = useState(0);

  const handleInputChange = (e) => {
    const value = Number(e.target.value);

    if (value >= 0 && value <= 100) {
      setProgress(value);
      onProgressChange(value);
    } else {
        alert("Please enter a value between 0 and 100.");
    }
  };

  return (
    <div className="flex mt-4 align-middle justify-start gap-2">
      <label htmlFor="progress-input" className="text-sm font-medium self-center">
        Input Percentage:
      </label>
      <input
        type="number"
        min="0"
        max="100"
        value={progress}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-lg p-1 w-15 text-center focus:ring-2 focus:ring-blue-800 outline-none"
      />
    </div>
  );
}
