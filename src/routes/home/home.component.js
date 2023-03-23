import { Outlet } from "react-router-dom";
import Directory from "../../Components/directory/Directory";



const Home =  ()=>  {

  
  return (
   <div>
    <Outlet/>
   <Directory ></Directory>
   </div>
  );
};

export default Home;
