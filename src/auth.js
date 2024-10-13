import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
  message = "Invalid identifier or password";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.email === process.env.NEXT_ADMIN_EMAIL &&
          credentials.password === process.env.NEXT_ADMIN_PASSWORD
        ) {
          return {
            email: process.env.NEXT_ADMIN_EMAIL,
            name: "admin",
            avatar: "https://dummyimage.com/50X50",
          };
        }
        throw new InvalidLoginError("Invalid credentials");
      },
    }),
  ],
});
