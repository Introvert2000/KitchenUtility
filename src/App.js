import "./index.css"
import Pages from "./pages/pages.js"
import Categories from "./components/Categories";
import { BrowserRouter} from 'react-router-dom';


function App() {
  return ( 
      <BrowserRouter>
        <div className="App">
        <Categories />
        <Pages />
        </div>
      </BrowserRouter>
  );
}

export default App;
