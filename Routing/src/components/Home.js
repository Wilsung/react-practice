import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export default function HomePage() {
  // const navigate = useNavigate();
  // function navigateHandler(){
  //   navigate('/products');
  // }

  return (
    <>
      <h1>hello</h1>
      <p>
        <Link to="/products">Products</Link>
      </p>
      {/* <p>
        <button onClick={navigateHandler}>Products</button>
      </p> */}
    </>
  );
}
