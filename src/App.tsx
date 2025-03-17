import { RouterProvider } from "react-router-dom";
import {router} from './pages/router'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster} from 'sonner'

export function App() {
 return ( 
 <HelmetProvider>
    <Helmet titleTemplate="%s | pizza.shop"/>
    <Toaster/>
    <RouterProvider router={router} />
 </HelmetProvider>
 )
}