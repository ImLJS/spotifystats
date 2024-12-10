import { auth } from '@/auth';
import Image from 'next/image';

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) return null;

  const { name, email, image } = session?.user;

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image
          src={image}
          width={50}
          height={50}
          alt="Spotify Profile Pic"
          className="rounded-full"
        />
        <h1>Hi, {name}</h1>
      </div>
      <p>Your email is {email}</p>
    </div>
  );
}
