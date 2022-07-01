import './App.css';
import Navbar from './componants/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './componants/Pages/Home/Home';
import CompletedTask from './componants/Pages/Task/CompletedTask';
import Alltask from './componants/Pages/Task/Alltask';
import Calender from './componants/Pages/Calender/Calender';
import Error from './componants/Pages/Error/Error';
import Login from './componants/Pages/Login/Login';
import Dashboard from './componants/Pages/Dashboard.js/Dashboard';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="/completedtask" element={<CompletedTask></CompletedTask>} />
        <Route path="/task" element={<Alltask></Alltask>} />
        <Route path="/calender" element={<Calender></Calender>} />
        <Route path="/login" element={<Login></Login>} />

        <Route path="/dashboard" element={<Dashboard></Dashboard>}>

          <Route index element={<Alltask></Alltask>} />
          <Route path="completedtask" element={<CompletedTask></CompletedTask>} />
          <Route path="task" element={<Alltask></Alltask>} />

        </Route>



        <Route path="*" element={<Error></Error>} />
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
