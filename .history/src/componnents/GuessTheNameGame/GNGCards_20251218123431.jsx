export default function GNGCards({ lettersList, wrongLetters, lang }) {

    const renderCards = () => {
        return lettersList.map((letter) => (
            <div
                style={{ fontFamily: "Vazirmatn" }}
                key={letter.id}
                className={`p-6 w-14 h-16 flex items-center justify-center m-2 rounded-2xl text-2xl font-bold text-white shadow-lg transition-transform transform hover:scale-110 ${
                    letter.shown ? "bg-emerald-500" : "bg-gray-400"
                }`}
            >
                {letter.shown ? letter.letter.toUpperCase() : "_"}
            </div>
        ));
    };

    const renderWrongCars = () => {
        return wrongLetters.map((letter, index) => (
            <div
                style={{ fontFamily: "Vazirmatn" }}
                key={index}
                className="bg-red-500 p-4 w-14 h-16 flex items-center justify-center m-2 rounded-2xl text-white font-bold shadow-md text-xl transition-transform transform hover:scale-110"
            >
                {letter.toUpperCase()}
            </div>
        ));
    }h

    return (
        <div className="flex flex-col items-center mt-8 w-full max-w-xl">
            <section className="flex flex-row flex-wrap justify-center mb-6">
                {renderCards()}
            </section>
            {wrongLetters.length > 0 && (
                <section className="flex flex-row flex-wrap justify-center">
                    {renderWrongCars()}
                </section>
            )}
        </div>
    )
}