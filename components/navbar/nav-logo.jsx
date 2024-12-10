import { Icons } from '../icons';

export function NavLogo() {
  return (
    <div className="flex items-center space-x-3">
      <Icons.logo />
      <span className="text-xl font-bold">Spotify Stats</span>
    </div>
  );
}
