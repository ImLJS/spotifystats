'use client';

import { Button } from '../ui/button';
import { SignIn, SignOut } from '@/actions/auth-actions';

function SpotifyButton({ size, authHandler, children }) {
  return (
    <Button onClick={authHandler} size={size}>
      {children}
    </Button>
  );
}

export default SpotifyButton;
