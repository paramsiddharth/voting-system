import {
  BrowserRouter,
  Route,
  Routes,
  Outlet
} from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Home from './routes/home';
import NotFound from './routes/404';
import Login from './routes/login';
import SignUp from './routes/signup';
import Election from './routes/election';

function AppLayout() {
  return <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' errorElement={<NotFound />} element={<AppLayout />}>
            <Route path='' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<SignUp />} />
            <Route path='election/:id' element={<Election />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
