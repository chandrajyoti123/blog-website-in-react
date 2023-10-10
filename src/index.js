
import ReactDOM from 'react-dom/client';
import Home from './view/Home/Home';
import DetailPage from './view/DetailPage/DetailPage';
import { BrowserRouter,RouterProvider, createBrowserRouter } from 'react-router-dom';
const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/detail/:id",
        element:<DetailPage/>
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  
);
