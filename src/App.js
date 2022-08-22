import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home'
import Products from './pages/Products'
import Error from './pages/Error';
import Shared from './components/Shared'
import SingleProduct from './pages/SingleProduct'
import {useState} from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import SharedProduct from './components/SharedProduct';
function App() {
  const [user,setUser]=useState(null)
  return <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Shared/>}>
      <Route index element={<Home/>}></Route>
    <Route path='About' element={<About/>}/>
<Route path='Product' element={<SharedProduct/>}>
<Route index element={<Products/>}/>
    <Route path=':productId' element={<SingleProduct/>}/>

</Route>

    
    <Route path='*' element={<Error/>}/>
    <Route path='login' element={<Login setUser={setUser}></Login>}/>
    <Route path='dashboard' element={
    <ProtectedRoute user={user}>
      <Dashboard user={user}></Dashboard>
    </ProtectedRoute>
    }/>

    </Route>
  </Routes>
  
  </BrowserRouter>
}

export default App;
