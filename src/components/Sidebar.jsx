import { Link } from "react-router-dom";
const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
);
export default Sidebar;
