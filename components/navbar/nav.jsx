import { NavLogo } from './nav-logo';
import { NavAuthActions } from './nav-auth-actions';
import { ModeToggle } from '../dark-mode/mode-toggle';
import { auth } from '@/auth';

export async function Nav() {
  const session = await auth();

  return (
    <header className="flex items-center justify-between border-b p-4">
      <NavLogo />
      <div className="flex items-center space-x-3">
        <ModeToggle />
        <NavAuthActions session={session} />
      </div>
    </header>
  );
}

export default Nav;
