import { useState, useEffect } from "react"

export default function GNGInput({ onGuess, disabled }) {

    useEffect(() => {
        if (cleanInput) {
            
        }
    }, [cleanInput])

    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue) {
            onGuess(inputValue.toLowerCase())
            setInputValue("")
        }
    }

    return (
        <input
            maxLength={1}
            className="border-2 border-blue-400 bg-white w-20 p-3 rounded-2xl font-bold text-center text-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="-"
            disabled={disabled}
        />
    )
}