import { Routes, Route } from "react-router-dom";
import Checkout from "./routes/checkout/checkout.component";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.components";
import Authentication from "./routes/sign-in/authentication.component";
import Shop from "./routes/ٍShop/shop.component";
const App = () => {
  // const Shop = () => {
  //   return <h1> i am the shop page </h1>;
  // };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index   element={<Home />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />}/>

      </Route>
    </Routes>
  );
};

export default App;
