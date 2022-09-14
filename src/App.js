import './index.css';
import Header from './components/Header';
import Main from './components/Main';


function App() {

  function handleSelect(){
    console.log('a selection has been made')
  }


  return (
    <div className="App">
      <Header />
      <Main handleSelect={handleSelect}/>
    </div>
  );
}

export default App;
