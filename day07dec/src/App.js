import logo from './logo.svg';
import './App.css';
import ProfileCreation from './ProfileCreation'
import SwitchProgram from './SwitchProgram'


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="PropsUsage">
        <ProfileCreation/>
      </div>
      <div className="SwitchProg">
        <SwitchProgram/>
      </div>
      
    </div>
  );
}

export default App;
