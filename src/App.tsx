import { RouterProvider } from "react-router-dom";
import {router} from './pages/router'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster} from 'sonner'
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
 return ( 
 <HelmetProvider>
   <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
    <Helmet titleTemplate="%s | pizza.shop"/>
    <Toaster/>
    <RouterProvider router={router} />
    </ThemeProvider>
 </HelmetProvider>
 )
}