import {BrowserRouter, Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contato';
import Erro from './pages/Erro';

import Header from './components/Header';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/sobre" element={ <Sobre/> }></Route>
                <Route path="/contato" element={ <Contato/> }></Route>

                <Route path="*" element={ <Erro/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}
