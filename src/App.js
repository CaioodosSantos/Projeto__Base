import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Visitas from "./pages/visitas/Visitas";
import VisitasLista from "./pages/visitas/VisitasLista";
import VistoriasLista from "./pages/vistorias/VistoriasLista";
import Vistorias from "./pages/vistorias/Vistorias";
import Retiradas from "./pages/retiradas/Retiradas";
import RetiradasLista from "./pages/retiradas/RetiradasLista";
import Adequacaos from "./pages/adequacaos/Adequacaos";
import AdequacaosLista from "./pages/adequacaos/AdequacaosLista";
import Mudancas from "./pages/mudancas/Mudancas";
import MudancasLista from "./pages/mudancas/MudancasLista";
import Home from "./pages/home/Home";
import InstalacaosLista from "./pages/instalacaos/IntalacaosLista";
import Instalacaos from "./pages/instalacaos/Intalacaos";


function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/instalacaos" element={<InstalacaosLista />} /> 
            <Route path="/instalacaos/:id" element={<Instalacaos />} /> 
            <Route path="/instalacaos/create" element={<Instalacaos />} /> 
            <Route path="/visitas" element={<VisitasLista />} /> 
            <Route path="/visitas/create" element={<Visitas />} /> 
            <Route path="/visitas/:id" element={<Visitas />} />
            <Route path="/vistorias" element={<VistoriasLista />} />
            <Route path="/vistorias/create" element={<Vistorias />} />
            <Route path="/vistorias/:id" element={<Vistorias />} />
            <Route path="/retiradas" element={<RetiradasLista />} />
            <Route path="/retiradas/create" element={<Retiradas />} />
            <Route path="/retiradas/:id" element={<Retiradas />} />        
            <Route path="/adequacaos" element={<AdequacaosLista />} />
            <Route path="/adequacaos/create" element={<Adequacaos />} />
            <Route path="/adequacaos/:id" element={<Adequacaos />} />   
            <Route path="/mudancas" element={<MudancasLista />} />
            <Route path="/mudancas/create" element={<Mudancas />} />
            <Route path="/mudancas/:id" element={<Mudancas />} />     
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
