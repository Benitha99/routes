import { Link,Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Stylednavbar from './Stylednavbar'
const Shared = () => {
  return (
    <>
    <Stylednavbar/>
   
      
      <Outlet></Outlet>
    
    
    </>
   
  );
};
export default Shared;
