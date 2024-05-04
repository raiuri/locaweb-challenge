import { Keyword } from "@/components/Keyword"
import { KeywordsRecommend } from "@/components/KeywordsRecommend"
import { Toaster } from "@/components/ui/toaster"

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";


type AppProps = {
  signOut?: UseAuthenticator["signOut"];
  user?: AuthUser;
};

function App({ signOut, user }: AppProps) {
  return (
    <div className="flex">
        <Keyword />
        <KeywordsRecommend />
        <div>
          <Heading level={1}>Hello {user?.username}</Heading>
          <Button onClick={signOut}>Sign out</Button>
        </div>
        <Toaster />
    </div>
  )
}

export default withAuthenticator(App);
