import './App.css';
import { Outlet } from 'react-router-dom'
import Navbar from './components/navigation'
// import Type from './routes/type'
function App() {
  return (
    <div className="bg-black h-full">

      <Navbar />

      <div className="w-2/3 mx-auto text-white h-screen text-2xl">

        <Outlet />

      </div>
    </div>
  );
}

export default App;
