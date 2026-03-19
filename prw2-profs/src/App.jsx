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
//import Lista from './components/Lista/Lista';
import Area from './components/Area/Area';


function App() {

    const areas = [
        {
            nome: 'Progr. Básica',
            corPrimaria: '#57c278',
            corSecundaria: '#d9f7e9'
        },
        {
            nome: 'Progr. Web',
            corPrimaria: '#82cffa',
            corSecundaria: '#e8f8ff'
        },
        {
            nome: 'Banco de Dados',
            corPrimaria: '#a6d157',
            corSecundaria: '#f0f8e2'
        },
        {
            nome: 'Diversos',
            corPrimaria: '#e06b69',
            corSecundaria: '#fde7e8'
        }
    ];

    const listaAreas = areas.map( area => area.nome );
    // lista (array) de professores.
    // o valor inicial é um array vazio []
    const [professores, setProfessores] = useState([])
    const adicionaProf = (prof) => {
        setProfessores([...professores, prof])




    }
    return (
        <div>
            <Banner />
            <Formulario  areas={listaAreas} aoProfCadastrado={prof => adicionaProf(prof)} />
            {areas.map(area => <Area key={area.nome}
                nome={area.nome}
                corPrimaria={area.corPrimaria}
                corSecundaria={area.corSecundaria}
                professores={ professores.filter( prof => prof.area === area.nome ) }/>)}
        </div>
    );
}
export default App;