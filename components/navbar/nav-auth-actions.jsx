import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SignIn, SignOut } from '@/actions/auth-actions';

export function NavAuthActions({ session }) {
  // Not logged in state
  if (!session) {
    return <Button onClick={SignIn}>Sign In</Button>;
  }

  // Logged in state
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={session.user?.image || ''}
            alt={session.user?.name || 'User Avatar'}
          />
          <AvatarFallback>
            {session.user?.name?.charAt(0).toUpperCase() || 'U'}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{session.user?.name}</DropdownMenuItem>
        <DropdownMenuItem onClick={SignIn} className="cursor-pointer">
          Switch Account
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={SignOut}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
