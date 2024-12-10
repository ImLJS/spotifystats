import { auth } from '@/auth';

export default async function Dashboard() {
  const session = await auth();
  console.log("session",session);

  if (!session?.user) return null;

  return (
    <div>
      hello world
    </div>
  );
}
