import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <Header></Header>
      </header>
      <header className="AppContent">
        <Content></Content>
        {/* <Login></Login> */}
      </header>
      <header className="AppFooter">
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;