// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Banner from './components/Banner/Banner'
// import CampoTexto from './components/CampoTexto/CampoTexto'
// import Formulario from './components/Formulario/Formulario'

// function App() {
//     const [count, setCount] = useState(0)

//     return (
//         <div>

//             <Banner />
//             <Formulario/>

//         </div>
//     );
// }

// export default App


import { useState } from 'react'
import Banner from './components/Banner/Banner'
import CampoTexto from './components/CampoTexto/CampoTexto'
import Formulario from './components/Formulario/Formulario'
import Lista from './components/Lista/Lista';

function App() {
    // lista (array) de professores.
    // o valor inicial é um array vazio []
    const [professores, setProfessores] = useState([])
    const adicionaProf = (prof) => {
        setProfessores([...professores, prof])
    }
    return (
        <div>
            <Banner />
            <Formulario aoProfCadastrado={prof => adicionaProf(prof)} />
            <Lista objetos={professores} />
        </div>
    );
}
export default App;