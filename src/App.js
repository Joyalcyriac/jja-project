import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import UserType from './components/registration/UserType';
import Clientlogin from './components/registration/Clientlogin';
import Clientreg from './components/registration/Clientreg';
import WorkerReg from './components/registration/WorkerReg';
import Workerlogin from './components/registration/Workerlogin';
import Landing from './components/landing/Landing';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home method='post' />}></Route>
      <Route path='/type' element={<UserType method='post' />}></Route>
      <Route path='/clientlog' element={<Clientlogin method='post' />}></Route>
      <Route path='/clientreg' element={<Clientreg method='post' />}></Route>
      <Route path='/workerreg' element={<WorkerReg method='post' />}></Route>
      <Route path='/workerlog' element={<Workerlogin method='post' />}></Route>
      <Route path='/land' element={<Landing method='get' />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
