import { SignUpStyle } from "./styles/SignUpStyle";
import { Form } from "./styles/Form";
import useForm from "../lib/useForm";
import { useRouter } from "next/router";
import {
  SIGNIN_MUTATION,
  CURRENT_USER_QUERY,
  SIGNUP_MUTATION,
} from "../lib/queries/userQueries";
import { useMutation } from "@apollo/client";
import Link from "../node_modules/next/link";
import { useRef } from "react";
const SignUp = () => {
  const router = useRouter();
  const { inputs, handleChange, emailExists, validEmail } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signUp, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    },
  });
  const [signIn, { data: signInData, loading: signInLoading }] = useMutation(
    SIGNIN_MUTATION,
    {
      variables: {
        email: inputs.email,
        password: inputs.password,
      },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  const emailInput = useRef();
  if (!emailExists()) {
    emailInput?.current?.setCustomValidity("");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailExists()) {
      emailInput?.current?.setCustomValidity("Insert a valid e-mail");
      emailInput?.current?.focus();
    } else if (inputs.password !== inputs.confirmPassword) {
      document.getElementById("confirmPassword").focus();
    } else {
      await signUp();
      await signIn();
      router.push("/");
    }
  };
  return (
    <SignUpStyle>
      {!data && (
        <>
          <Form onSubmit={handleSubmit}>
            <h1>Sign Up with your E-mail! &#127797;</h1>
            <p>
              Already have an account? <Link href="/sign-in">Sign in!</Link>
            </p>
            <fieldset disabled={loading} aria-busy={loading}>
              {/* // Name */}
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Type your name"
                  value={inputs.name}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={50}
                  required
                />
              </label>
              {/* // Email */}
              <label htmlFor="email">
                E-mail
                <input
                  ref={emailInput}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Type your email"
                  className={
                    emailExists() || !validEmail(inputs.email)
                      ? "input-error"
                      : null
                  }
                  value={inputs.email}
                  onChange={handleChange}
                  maxLength={50}
                  required
                />
                {/* Validation */}
                {!validEmail(inputs.email) && inputs.email.length > 5 && (
                  <p className="error"> &#9940;Email invalid! </p>
                )}
                {emailExists() && (
                  <p className="error">
                    &#9940;Email already exists!{" "}
                    <Link href="/sign-in">Sign-in?</Link>
                  </p>
                )}
              </label>
              {/* // Password */}
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Type your password"
                  value={inputs.password}
                  onChange={handleChange}
                  minLength={8}
                  maxLength={50}
                  required
                />
              </label>
              {/* // Confirm Password */}
              <label htmlFor="confirmPassword">
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={inputs.confirmPassword}
                  className={
                    inputs.confirmPassword !== inputs.password
                      ? "input-error"
                      : null
                  }
                  onChange={handleChange}
                  minLength={8}
                  maxLength={50}
                  required
                />
                {inputs.confirmPassword !== inputs.password &&
                  inputs.confirmPassword.length > 0 && (
                    <p className="error"> &#9940;Password doesnt match! </p>
                  )}
              </label>
              {!loading && <button type="submit">Sign Up &#128051;</button>}
              {loading ||
                (signInLoading && (
                  <div className="submit-spinner">
                    <img src="img/icon-spinner.svg" alt="spinner" />
                  </div>
                ))}
            </fieldset>
          </Form>
          <p className="separator"> Or </p>
          <section id="OAuth-signup">
            <button id="facebook-button" type="button">
              Sign up with Facebook
            </button>
            <button id="gmail-button" type="button">
              Sign up with Gmail
            </button>
          </section>
        </>
      )}
    </SignUpStyle>
  );
};
export default SignUp;
