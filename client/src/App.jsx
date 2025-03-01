import Header from "./Components/header";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import CustomerReviews from "./components/customerReview";
import Provide from "./Components/Provide";

import "./styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <CustomerReviews />
    </>
  );
}

export default App;
