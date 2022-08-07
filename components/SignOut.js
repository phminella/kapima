import { useMutation, useQuery } from "@apollo/client/react";
import {
  CURRENT_USER_QUERY,
  SIGNOUT_MUTATION,
} from "../lib/queries/userQueries";

const SignOut = () => {
  const [signout, { loading: signOutLoading }] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);
  return (
    <>
      {signOutLoading ? (
        <button className="signout-button" type="button">
          <img src="../img/icon-spinner.svg" />
        </button>
      ) : (
        <button className="signout-button" type="button" onClick={signout}>
          Sign out
        </button>
      )}
    </>
  );
};

export default SignOut;
