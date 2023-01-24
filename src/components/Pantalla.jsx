import "../styles/Pantalla.css"
export function Pantalla({valor}){
    return(
        <input
        className="display-box"
        type="text"
        id="result"
        value={valor}
        disabled
        />
    )
}