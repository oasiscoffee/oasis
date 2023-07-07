import logo from './oasis.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='announcement-container'>
        <div className='logo-wrapper'>
          <img className='logo' alt='logo' src={logo}></img>
        </div>
        <div className='coming-soon-wrapper'>
          <p className='coming-soon-text'>Coming soon!</p>
        </div>
        <div className='apply-text-wrapper'>
          <p className='apply-text'>Now hiring! Please apply with the following <a href="https://forms.gle/LN1YEdix5HdPaqJR7" target="_blank" rel="noreferrer">link!</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
