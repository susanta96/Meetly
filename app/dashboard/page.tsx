import { requireUser } from "../lib/hooks";

async function Dashboard() {
  const session = await requireUser();

  return <div>Dashboard</div>;
}

export default Dashboard;
