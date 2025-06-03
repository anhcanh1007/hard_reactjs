import { Link, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1 className="mb-6 text-lg">Dashboard</h1>
      <p className="text-amber-950">{location.state}</p>
      <Link to="?sort=name&order=acseding">Name</Link>
      <Link to="?sort=age&order=acseding">Age</Link>
      <Link to="?sort=address&order=acseding">Address</Link>
    </div>
  );
}
