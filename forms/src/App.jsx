import Header from './components/Header.jsx';
import Signup from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import StateLogin from './components/StateLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <StateLogin />
      </main>
    </>
  );
}

export default App;
