import { useQuery } from "@apollo/client";
import { AUTHSTORE } from "@graphql/authStorage";
import { apolloClient } from "@graphql/client";
import { AuthenticateUserWithPassword, User } from "@graphql/declarations/auth";

const Test = () => {
  const { data, refetch } = useQuery(User);

  const signin = async () => {
    const result = await apolloClient.mutate({
      mutation: AuthenticateUserWithPassword,
      variables: {
        email: "admin",
        adminPassword: "admin123",
      },
    });

    if (
      result.data?.authenticateUserWithPassword?.__typename ===
      "UserAuthenticationWithPasswordSuccess"
    ) {
      AUTHSTORE.set(result.data.authenticateUserWithPassword.sessionToken);

      // reload all cached data
      apolloClient.resetStore().then(() => {
        refetch();
      });
    }
  };

  const signout = () => {
    AUTHSTORE.clear();
    apolloClient.resetStore().then(() => {
      refetch();
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Data: {JSON.stringify(data)}</p>
      <button onClick={signin}>Signin</button>
      <button onClick={signout}>Signout</button>
    </div>
  );
};

export default Test;
