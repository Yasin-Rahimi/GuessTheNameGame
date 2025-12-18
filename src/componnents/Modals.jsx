export default function Modals({onYes, onNo}){
    return (
        <div className="p-4 border border-gray-300 rounded shadow-lg max-w-md mx-auto mt-20 text-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
            <button onClick={onYes} className="border-red-100 border-2 m-2 px-4 py-2">Y</button>
            <button onClick={onNo} className="border-red-100 border-2 m-2 px-4 py-2">N</button>
        </div>
    )
}