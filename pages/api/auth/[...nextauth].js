import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLAINT,
      clientSecret: process.env.GITHUB_PRIVATE,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_SECRET_PUBLIC,
      clientSecret: process.env.GOOGLE_SECRET_PRIVATE,
    }),

    // ...add more providers here
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "auth/login",
    signOut: "auth/logout",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
});
