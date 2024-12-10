'use server';

import { signIn, signOut } from '@/auth';

export async function SignIn() {
  await signIn('spotify', { redirectTo: '/dashboard' });
}

export async function SignOut() {
  await signOut({ callbackUrl: '/' });
}
