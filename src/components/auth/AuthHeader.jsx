import { Link } from "react-router-dom";


const AuthHeader = ({ title, linkText, aboutUser, linkHref }) => {
  return (
    <>
      <h1 className="text-3xl uppercase font-bold">{title}</h1>
      <div className="mt-2 flex gap-2">
        <p className="text-gray-600 dark:text-gray-300">{aboutUser}?</p>
        <p className="text-blue-900 dark:text-blue-300">
          <Link to={linkHref}>{linkText}</Link>
        </p>
      </div>
    </>
  );
};

export default AuthHeader;
