import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Header from './components/header';

import './App.css';
import Footer from './components/footer';
import Main from './components/main';
import Home from './routes/home';
import NotFound from './routes/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <RouterProvider router={router} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
