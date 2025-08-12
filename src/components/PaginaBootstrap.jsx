import { Button } from "react-bootstrap"
import '../components/css/style.css'

function PaginaBootstrap() {
    return (
        <div className="container">
            <h1>Página bootstrap</h1>
            <button className="btn btn-outline-primary">Clique aqui!!!</button>
            <Button variant="outline-dark">Clique aqui!!!</Button>
            <a className="bonitinho" href="#">Botão bonitinho</a>
        </div>
    )
}

export default PaginaBootstrap