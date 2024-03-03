import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './reset.css';
import './App.css';
import ViewPhones from './pages/ViewPhones'
import CreatePhone from './pages/CreatePhone'; 
import Header from './components/Header';

function App () {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/create/phone' element={<CreatePhone/>}/>
        <Route path='/phones' element={<ViewPhones/>}/>
      </Routes>
    </Router>
  );
}

export default App;
