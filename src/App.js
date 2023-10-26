
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmpList from './EmpList';
import Add from './Add';
import Details from './Details';
import Edit from './Edit';



function App() {
  return (
    <div style={{height:'100vh'}} className="App d-flex flex-column justify-content-center align-items-center w-100">

      

      <BrowserRouter>

<Routes>
<Route path='/' element={<EmpList/>} />
  <Route path='/add' element={<Add/>} />
  <Route path='/details/:empid' element={<Details/>} />
  <Route path='/edit/:empid' element={<Edit/>} />

</Routes>

</BrowserRouter>

      
    </div>
  );
 
}

export default App;
