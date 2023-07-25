import './App.css';
import CreateAccount from './components/CreateAccount/CreateAccount';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/AdminDashboard/MainDashboard/AdminHome';
import AdminNavigate from './components/AdminDashboard/MainDashboard/AdminNavigate/AdminNavigate';
import Batches from './components/AdminDashboard/Batches/Batches';
import AdminTopBar from './components/AdminDashboard/MainDashboard/AdminTopbar/AdminTopBar';
import Users from './components/AdminDashboard/Users/Users';
import Categories from './components/AdminDashboard/Categories/Categories';
import StockIn from './components/AdminDashboard/StockIn/StockIn';
import StockOut from './components/AdminDashboard/StockOut/StockOut';
import Reorder from './components/AdminDashboard/Reorder/Reorder';
import Reports from './components/AdminDashboard/Reports/Reports';
import LoginForm from './components/LoginForm/LoginForm';


function App() {
  return (
    <Router>
        {/* <Routes>
        <Route path='/' exact Component={AdminHome}></Route>
        <Route path='/login' Component={LoginForm}></Route>
        <Route path='/createAccount' Component={CreateAccount}></Route>
        <Route path='/ForgotPassword' Component={ForgotPassword}></Route>
      </Routes> */}

        <AdminNavigate/>
          <Routes>
              <Route path='/' exact Component={AdminHome}></Route>
              <Route path='/batches' Component={Batches}></Route>
              <Route path='/medicines' Component={Users}></Route>
              <Route path='/categories' Component={Categories}></Route>
              <Route path='/stockin' Component={StockIn}></Route>
              <Route path='/stockout' Component={StockOut}></Route>
              <Route path='/reorder' Component={Reorder}></Route>
              <Route path='/reports' Component={Reports}></Route>
          </Routes>
    
    </Router>
  );
}

export default App;
