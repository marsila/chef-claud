import shefClaude from "./assets/shef-claude.png"

export default function Header(){
    return(
        <header className="header-box-shadow">
            <img src={shefClaude} alt="shef claude icon" />
            <h1>Chef claude</h1>
        </header>
    )
}