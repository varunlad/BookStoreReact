import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Forgotpassword from './pages/Forgotpassword/Forgotpassword';
import Dashboard from './pages/Dashboard/Dashboard';
import RouterDom from './pages/Router/Router';
import Home from './component/Home/Home';
import Wishlist from './component/Wishlist/Wishlist';

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Forgotpassword /> */}
      {/* <Dashboard /> */}
      <RouterDom />
      {/* <Wishlist /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
