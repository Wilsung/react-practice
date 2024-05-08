import Header from "./components/Header";
import HeaderCourse from './componentsCourse/Header.jsx';
import AvailableMeals from "./components/AvailableMeals.jsx";
import Meals from './componentsCourse/Meals.jsx'
import CartContextProvider from "./store/shoppingcart-context.jsx";
// import { CartContextProvider } from "./store/CartContextProvider.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./componentsCourse/Cart.jsx";
import Checkout from "./componentsCourse/Checkout.jsx";

function App() {
  return (
      <CartContextProvider>
        <Header />
        <AvailableMeals />
      </CartContextProvider>


    // Course Components
    ////////////////////
    // <UserProgressContextProvider>
    //   <CartContextProvider>
    //     <HeaderCourse />
    //     <Meals />
    //     <Cart />
    //     <Checkout />
    //   </CartContextProvider>
    // </UserProgressContextProvider>
  );
}

export default App;
