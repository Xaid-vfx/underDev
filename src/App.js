import './App.css';
import Header from './Component/Header/HeadFile'
import Navbar from './Component/NavFile/Navbar'
import MainBody from './Component/MainBody/Mainbody'
function App() {
  return (
    <>
    <div className="mainContainer">
      <Header/>
      <Navbar/>
      <MainBody/>
    </div>
    </>
  );
}

export default App;
