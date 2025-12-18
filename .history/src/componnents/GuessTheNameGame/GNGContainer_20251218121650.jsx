import { useState, useEffect, useRef } from "react"
import { v4 } from "uuid"
import GNGInput from "./GNGInput"
import GNGCards from "./GNGCards"
import GNGCategory from "./GNGCategory";
import { words } from "./WordsBank.js"

import bgMusicFile from "./assets/bgMusicFile.mp3"
import successSoundFile from "./assets/successSoundFile.mp3"
import gameOverSoundFile from "./assets/gameOverSoundFile.mp3"

export default function GNGContainer() {
  const [randomWord, setRandomWord] = useState("")
  const [lettersList, setLettersList] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [disabledInput, setDisabledInput] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [lang, setLang] = useState("en")
  const [categoryShow, setCategoryShow] = useState(true)
  const [category, setCategory] = useState("")
  const [isMuted, setIsMuted] = useState(false)

  const WORDS = lang === 'en' ? words.en[category] : words.fa[category]

  // ===== Audio Refs =====
  const bgAudioRef = useRef(null)
  const successSoundRef = useRef(null)
  const gameOverSoundRef = useRef(null)

  useEffect(() => {
    bgAudioRef.current = new Audio(bgMusicFile)
    bgAudioRef.current.loop = true
    bgAudioRef.current.volume = 0.2

    successSoundRef.current = new Audio(successSoundFile)
    successSoundRef.current.volume = 0.7

    gameOverSoundRef.current = new Audio(gameOverSoundFile)
    gameOverSoundRef.current.volume = 0.7
  }, [])

  const playBgMusic = () => {
    if (bgAudioRef.current && bgAudioRef.current.paused) {
      bgAudioRef.current.play().catch(() => {})
    }
  }

  const toggleMute = () => {
    setIsMuted(prev => !prev)
    const newMuted = !isMuted
    if (bgAudioRef.current) bgAudioRef.current.muted = newMuted
    if (successSoundRef.current) successSoundRef.current.muted = newMuted
    if (gameOverSoundRef.current) gameOverSoundRef.current.muted = newMuted
  }

  const handleCategoryClicked = (value) => {
    setCategory(value)
    setCategoryShow(false)
  }

  const selectWord = () => {
    resetFromBeginning()
    playBgMusic() // شروع موسیقی پس‌زمینه بعد از اولین تعامل
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)]
    setRandomWord(randomWord)
    const letters = randomWord.split("").map(letter => ({ letter, shown: false, id: v4() }))
    setLettersList(letters)
  }

  const resetFromBeginning = () => {
    setLettersList([])
    setWrongLetters([])
    setDisabledInput(false)
    setIsGameOver(false)
  }

  const getCharLang = (char) => {
    if (/^[a-zA-Z]$/.test(char)) return "en"
    if (/^[\u0600-\u06FF]$/.test(char)) return "fa"
    return "invalid"
  }

  const handleGuess = (letter) => {
    if (getCharLang(letter) === lang) {
      if (lettersList.some(item => item.letter === letter)) {
        setLettersList(prev =>
          prev.map(item => (item.letter === letter ? { ...item, shown: true } : item))
        )
      } else {
        setWrongLetters(prev =>
          prev.includes(letter) ? prev : [...prev, letter]
        );
      }
    } else {
      alert(lang === "en"
        ? "Please enter a valid letter for the selected language."
        : "لطفاً یک حرف معتبر برای زبان انتخاب شده وارد کنید."
      )
    }
  }

  const handleLangClick = () => {
    setLang(lang === "en" ? "fa" : "en")
    resetFromBeginning()
  }

  // ===== Game Effects =====
  useEffect(() => {
    if (lettersList.length === 0) return
    const allShown = lettersList.every(item => item.shown)
    if (allShown) {
      setDisabledInput(true)
      if (successSoundRef.current) successSoundRef.current.play().catch(() => {})
    }
    if (wrongLetters.length >= lettersList.length) {
      setIsGameOver(true)
      if (gameOverSoundRef.current) gameOverSoundRef.current.play().catch(() => {})
    }
  }, [lettersList, wrongLetters])

  return (
    <div dir={lang === "fa" ? "rtl" : "ltr"} className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-indigo-100 via-blue-50 to-blue-100 py-10">

      {/* Category Modal */}
      {categoryShow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 w-80 sm:w-96 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
              {lang === "en" ? "Choose a Category" : "دسته‌بندی را انتخاب کنید"}
            </h2>
            <GNGCategory onClick={handleCategoryClicked} />
          </div>
        </div>
      )}

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-6 drop-shadow-lg" style={{ fontFamily: "Vazirmatn" }}>
        {lang === "en" ? category ? `Guess the ${category.en} word` : `Guess the word game` : category ? `بازی حدس ${category.fa}` : "بازی حدس کلمه"}
      </h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {!categoryShow && (
          <button
            onClick={() => setCategoryShow(true)}
            className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-lg"
            style={{ fontFamily: "Vazirmatn" }}
          >
            {lang === "en" ? "Change Category" : "تغییر دسته‌بندی"}
          </button>
        )}

        <button
          onClick={handleLangClick}
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-3xl shadow-md font-semibold transition-all duration-300 transform hover:scale-105 text-lg"
          style={{ fontFamily: "Vazirmatn" }}
        >
          {lang === "en" ? "فارسی" : "English"}
        </button>

        <button
          onClick={selectWord}
          className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 font-bold rounded-3xl shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
          style={{ fontFamily: "Vazirmatn" }}
        >
          {lang === "en" ? "Select Word" : "انتخاب کلمه"}
        </button>

        <button
          onClick={toggleMute}
          className="cursor-pointer bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-3xl shadow-md transition-all duration-300 transform font-bold hover:scale-105 text-lg"
          style={{ fontFamily: "Vazirmatn" }}
        >
          {isMuted ? (lang === "en" ? "Unmute" : "باز کردن صدا") : (lang === "en" ? "Mute" : "بی‌صدا")}
        </button>
      </div>

      {/* Game Area */}
      {lettersList.length > 0 && (
        <div className="flex flex-col items-center w-full max-w-4xl px-4 sm:px-0">
          <GNGInput onGuess={handleGuess} disabled={disabledInput} />
          <GNGCards lettersList={lettersList} wrongLetters={wrongLetters} />

          {lettersList.every(item => item.shown) && (
            <p className="text-green-600 font-extrabold text-3xl mt-6 animate-pulse drop-shadow-lg" style={{ fontFamily: "Vazirmatn" }}>
              {lang === "en" ? "🎉 Congratulations! You've guessed the word. 🎉" : "🎉 تبریک! شما کلمه را حدس زدید. 🎉"}
            </p>
          )}

          {isGameOver && (
            <p className="text-red-600 font-extrabold text-3xl mt-6 animate-pulse drop-shadow-lg" style={{ fontFamily: "Vazirmatn" }}>
              {lang === "en" ? (
                <>❌ Game Over! The word: <span className="text-red-500 text-4xl font-extrabold">{randomWord}</span> ❌</>
              ) : (
                <>❌ بازی تمام شد! کلمه درست: <span className="text-red-500 text-4xl font-extrabold">{randomWord}</span> ❌</>
              )}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
