import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { signIn } from '@/auth';

export function UserAuthForm({ className, ...props }) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form
        action={async () => {
          'use server';
          await signIn('spotify', { redirectTo: '/dashboard' });
        }}
      >
        <div className="grid gap-2">
          <Button variant="outline" type="submit" disabled={false}>
            <Icons.spotify className="mr-2 h-4 w-4" />
            Spotify
          </Button>
        </div>
      </form>
    </div>
  );
}
