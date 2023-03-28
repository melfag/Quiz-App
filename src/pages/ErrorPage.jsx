import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <li>
        <Link
          to="/"
          className="home-error-link"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
      </li>
      <br />
      This page doesn't exist <br /> Click the button above to go back to home
      page
    </div>
  );
};

export default Error;
