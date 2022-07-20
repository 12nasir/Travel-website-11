import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homes from './components/Homes/Homes';
import Header from './components/Header/Header';
import Destination from './components/Destination/Destination';
import HomeDetails from './components/HomeDetails/HomeDetails';
import NotFound from './components/NotFound/NotFound';
import SingleHome from './components/SingleHome/SingleHome';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Homes/>} />
          <Route path='/home' element={<Homes/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/about' element={<About/>} />
          <Route path="destination" element={
          <PrivateRoute>
            <Destination />
          </PrivateRoute>
        } />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
