import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { tweetRouter } from "~/server/api/routers/tweet";
import { Container } from "~/components/Container";
import { SignInBanner } from "~/components/SignInBanner";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Container>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
      <SignInBanner />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
