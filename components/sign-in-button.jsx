import { signIn } from '@/auth';

export function SignInButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('spotify', { redirectTo: '/olddashboard' });
      }}
      className="w-full"
    >
      <button
        type="submit"
        className="group flex w-full transform items-center justify-center rounded-full bg-[#1DB954] p-3 font-bold text-white shadow-md transition-colors duration-300 ease-in-out hover:scale-105 hover:bg-[#1AA34A] focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          className="group-hover:animate-spin-slow mr-3"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.907 17.564c-.235.39-.739.512-1.127.276-3.087-1.879-6.98-2.306-11.56-1.263-.438.1-.876-.173-.977-.61-.1-.44.174-.878.61-.978 4.956-1.132 9.2-.62 12.617 1.456.388.236.513.739.277 1.127zm1.592-3.54c-.297.492-.929.646-1.421.348-3.56-2.185-8.989-2.817-13.223-1.54-.55.165-1.13-.144-1.295-.694-.167-.55.143-1.13.695-1.296 4.79-1.454 10.718-.727 14.744 1.762.492.297.646.929.348 1.42zm.137-3.687c-4.253-2.522-11.268-2.758-15.333-1.52-.659.2-1.359-.172-1.56-.83-.197-.659.174-1.358.834-1.557 4.707-1.424 12.257-1.147 17.112 1.763.594.353.79 1.119.438 1.713-.353.594-1.119.79-1.713.438z" />
        </svg>
        Sign in with Spotify
      </button>
    </form>
  );
}
