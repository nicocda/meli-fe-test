import './App.scss';
import { BrowserRouter } from "react-router-dom"
import { Router } from './components/Router/Router';



function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
