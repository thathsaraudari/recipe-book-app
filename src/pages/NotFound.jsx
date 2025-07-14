import { Link } from "react-router-dom";

const NotFound = () => (
   <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for doesn’t exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
);
export default NotFound;
