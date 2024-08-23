// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = users.find(
          (u) =>
            u.username === credentials?.username &&
            u.password === credentials?.password,
        );
        if (user) {
          return { id: user.username, name: user.username, role: user.role };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role;
      }
      console.log(session);
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login", // Redirect to login page on error
  },
    secret: process.env.NEXTAUTH_SECRET, // Make sure this is set in your environment variables
};
export default NextAuth(authOptions);