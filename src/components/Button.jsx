import "../styles/Button.css"

export function Button({esNumOper, valor, manejarClick}){

    return (
        <input
        type={"button"}
        value={valor}
        className={esNumOper ? "boton-numero" : "boton-igualdad"}
        onClick={() => manejarClick(valor)}>
        </input>
    )
}