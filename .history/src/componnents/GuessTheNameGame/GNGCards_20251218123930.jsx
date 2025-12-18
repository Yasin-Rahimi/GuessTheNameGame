// GNGCards.jsx
export default function GNGCards({ lettersList, wrongLetters, lang }) {

    const renderCards = () => {
        return lettersList.map((letter, index) => (
            <div
                style={{
                    fontFamily: "Vazirmatn",
                    transitionDelay: `${index * 75}ms`, // stagger animation
                }}
                key={letter.id}
                className={`p-6 w-14 h-16 flex items-center justify-center m-2 rounded-2xl text-2xl font-bold text-white shadow-lg 
                            transition-all transform
                            ${letter.shown ? "bg-emerald-500 scale-105 opacity-100" : "bg-gray-400 scale-100 opacity-80"}`}
            >
                {letter.shown ? letter.letter.toUpperCase() : "_"}
            </div>
        ));
    };

    const renderWrongCards = () => {
        return wrongLetters.map((letter, index) => (
            <div
                style={{
                    fontFamily: "Vazirmatn",
                    transitionDelay: `${index * 75}ms`, // stagger animation
                }}
                key={index}
                className="bg-red-500 p-4 w-14 h-16 flex items-center justify-center m-2 rounded-2xl text-white font-bold shadow-md text-xl
                           transition-all transform scale-100 hover:scale-110 opacity-80"
            >
                {letter.toUpperCase()}
            </div>
        ));
    }

    return (
        <div className="flex flex-col items-center mt-8 w-full max-w-xl">
            <section className="flex flex-row flex-wrap justify-center mb-6">
                {renderCards()}
            </section>
            {wrongLetters.length > 0 && (
                <section className="flex flex-row flex-wrap justify-center">
                    {renderWrongCards()}
                </section>
            )}
        </div>
    )
}
