import { Fragment } from "react";
import { FaTerminal } from "react-icons/fa";
import Meta from "../components/Meta/Meta";

function ErrorPage() {
  return (
    <Fragment>
      <Meta title="Code with Zahid | Error" description="Page unavailble!" />
      <div className="flex-center flex-column gap-2">
        <FaTerminal className="error-icon" />
        <h1>404-Page Not Availble!</h1>
        <h3>Let's try using sidebar items for now...</h3>
      </div>
    </Fragment>
  );
}

export default ErrorPage;
