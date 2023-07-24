import './App.css';
import User from './user';
import Admin from './Admin';
import Adminlogin from './Adminlogin';
import Admindashboard from './Admindashboard';
import Viewapp from './viewapp';
import Removeapp from './removeapp';
import Home from './Home';
import Login from './Login';
import Createac from './Createac';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Findjob from './Findjob';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Applied from './Apply';
import Applynow from './applynow';
import Upload from './upload';
import Submitted from './submitted';
import Finall from './finall'
// import Applied from './Applied';
function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/"element={<User/>}/>
        <Route path="/Admin"element={<Admin/>}/>
        <Route path="/Adminlogin"element={<Adminlogin/>}/>
        <Route path="/Admindashboard"element={<Admindashboard/>}/>
        <Route path="/viewapp"element={<Viewapp/>}/>
        <Route path="/removeapp"element={<Removeapp/>}/>
        <Route path="/Home"element={<Home/>}/>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/Createac"element={<Createac/>}/>
        <Route path="/Dashboard"element={<Dashboard/>}/>
        <Route path="/Profile"element={<Profile/>}/>
        <Route path="/Findjob"element={<Findjob/>}/>
        <Route path="/App"element={<Applied/>}/>
        <Route path="/Applynow"element={<Applynow/>}/>
        <Route path="/upload"element={<Upload/>}/>
        <Route path="/upload/Submitted"element={<Submitted/>}/>
        <Route path="/Finall"element={<Finall/>}/>
      </Routes>
    </Router>
  );
}
export default App;
