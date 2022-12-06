import {
  BrowserRouter,
  Route,
  Routes,
  Outlet
} from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Home from './routes/home';
import NotFound from './routes/404';
import Login from './routes/login';
import SignUp from './routes/signup';
import Election from './routes/election';
import Logout from './routes/logout';

function AppLayout({ token, setToken }) {
  return <>
    <Header token={token} setToken={setToken} />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>;
}

function App() {
  const [token, setToken] = useLocalStorage('token');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' errorElement={<NotFound />} element={<AppLayout token={token} setToken={setToken} />}>
            <Route path='' element={<Home />} />
            <Route path='login' element={<Login token={token} setToken={setToken} />} />
            <Route path='logout' element={<Logout setToken={setToken} />} />
            <Route path='register' element={<SignUp token={token} setToken={setToken} />} />
            <Route path='election/:id' element={<Election token={token} />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
