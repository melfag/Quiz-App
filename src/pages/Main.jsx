import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="options">Choose an option below</section>
      <nav>
        <ul>
          <li>
            <Link
              to="/multiple"
              className="main-page-links"
              style={{ textDecoration: "none" }}
            >
              Multiple Choice
            </Link>
          </li>
          <li>
            <Link
              to="/truefalse"
              className="main-page-links"
              style={{ textDecoration: "none" }}
            >
              True-False
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Main;
