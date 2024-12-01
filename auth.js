import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Spotify],
    debug: process.env.NODE_ENV === "development",
})