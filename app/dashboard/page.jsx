import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth();
  console.log("session",session);

  if (!session?.user){
    redirect('/')
  }

  return (
    <div>
      hello world
    </div>
  );
}