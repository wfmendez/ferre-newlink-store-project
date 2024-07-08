import { Routes, Route } from "react-router-dom";

import Home from './routes/home/home.component';

const Shop = () => {
  return (
    <h1>I'm the shop page</h1>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Home />} />
    </Routes>
  )
}

export default App;
