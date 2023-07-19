import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';

const router = createBrowserRouter([
  { path:'/home',element: <HomePage />},
  {path:'/about', element: <AboutPage/> }
]);

function App() {
  return (
    <>
     
     <RouterProvider router={router} />
    
    </>
  );
}

export default App;
