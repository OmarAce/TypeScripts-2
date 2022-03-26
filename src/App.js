import './App.css';
import { Outlet } from 'react-router-dom'
import Navbar from './components/navigation'
import Type from './routes/type'
function App() {
  return (
    <div className="">

      <Navbar />

      <div className="w-2/3 mx-auto">

        <Outlet />

      </div>
    </div>
  );
}

export default App;
