import { Icons } from './icons';
import { ModeToggle } from './dark-mode/mode-toggle';
import SpotifyButton from './auth-page/auth-button';
import { SignIn, SignOut } from '@/actions/auth-actions';
import { auth } from '@/auth';

async function Header() {
  const session = await auth();

  return (
    <header className="flex items-center justify-between border-b p-4">
      <div className="flex items-center space-x-3">
        <Icons.logo />
        <span className="text-xl font-bold">Spotify Stats</span>
      </div>
      <div className="flex items-center space-x-3">
        <ModeToggle />
        <SpotifyButton authHandler={!session ? SignIn : SignOut}>
          {!session ? 'Sign In' : 'Sign Out'}
        </SpotifyButton>
      </div>
    </header>
  );
}

export default Header;
