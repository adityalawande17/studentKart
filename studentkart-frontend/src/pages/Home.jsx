import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>StudentKart</h1>
      <p>Your One Stop CSE Material hub</p>

      <Link to="/materials">Go to materials</Link>
    </div>
  );
};
export default Home;
