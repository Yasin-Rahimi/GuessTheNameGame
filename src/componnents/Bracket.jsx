export default function Bracket() {

    const handleBracketClick = () => {
        const int = parseFloat(document.getElementById('bracketInput').value);
        console.log(int < 0 ? parseInt(int - 1) : parseInt(int));
    }
    
    return (
        <>  
            <input type="text" name="bracketInput" id="bracketInput" className="border" />
            <input onClick={handleBracketClick} type="submit" value="Submit" />
        </>
    )
}