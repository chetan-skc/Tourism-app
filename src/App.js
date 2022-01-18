import './App.css';
import text from './Learnings/text';
import login from './Learnings/login';

function App() {
  return (
    <div className='App'>
      <table>
      <th><button id="btn">Home</button></th>
        <th><button id="btn">About us</button></th>
        <th><button id="btn">Contact us</button></th>
      </table>
      <h1>Log in</h1>
      <p>Email: <input type="text" /></p>
      <p>Password: <input type="password" /></p>
      <button id="btn">Login</button>
    </div>
  );
}

export default App;

