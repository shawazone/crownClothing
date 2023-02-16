import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.components";
import Signin from "./routes/sign-in/sign-in.component";
const App = () => {
  const Shop = () => {
    return <h1> i am the shop page </h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index   element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
