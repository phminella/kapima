import { SignInStyle } from './styles/SignInStyle';
import { Form } from './styles/Form';
import useForm from '../lib/useForm';
import { useRouter } from 'next/router';
import { SIGNIN_MUTATION, CURRENT_USER_QUERY } from '../lib/queries/userQueries';
import { useMutation, useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRef } from 'react';
const SignIn = () => {
    const router = useRouter();
    const { inputs, handleChange, validEmail, emailExists } = useForm({
        email: "",
        password: ""
    });
    const [signIn, { data, loading }] = useMutation(SIGNIN_MUTATION, {
        variables: {
            email: inputs.email,
            password: inputs.password
        },
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    })
    const emailInput = useRef();
    if (emailExists()) {
        emailInput?.current?.setCustomValidity("");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!emailExists()) {
            emailInput?.current?.setCustomValidity("Insert a valid e-mail");
            emailInput?.current?.focus();
        } else {
            const res = await signIn();
            if (res.data?.authenticateUserWithPassword?.message === "Authentication failed.") {
                document.getElementById("password").focus();
            }
            else {
                router.push('/');
            }
        }
    }
    return (
        <SignInStyle>
            <Form onSubmit={handleSubmit}>
                <h1>Sign In with your E-mail! &#127797;</h1>
                <p>Don't have an account? <Link href="/sign-up">Sign up!</Link></p>
                <fieldset disabled={loading} aria-busy={loading}>
                    {/* // Email */}
                    <label htmlFor="email">
                        E-mail
                        <input
                            ref={emailInput}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Type your email"
                            className={!emailExists() || !validEmail(inputs.email) ? "input-error" : null}
                            value={inputs.email}
                            onChange={handleChange}
                            maxLength={50}
                            required
                        />
                        {/* Validation */}
                        {(validEmail(inputs.email) && !emailExists() && inputs.email.length > 6) && <p className="error">&#9940;Email does not exist! <Link href="/sign-up">Sign-up?</Link></p>}
                        {(!validEmail(inputs.email) && inputs.email.length > 5) && <p className="error"> &#9940;Email invalid! </p>}
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
                        {data?.authenticateUserWithPassword?.message === "Authentication failed." && <p className="error"> &#9940;Your password is incorrect!</p>}
                    </label>
                    {!loading && <button type="submit">Sign In &#128051;</button>}
                    {loading && <div className='submit-spinner'><img src="img/icon-spinner.svg" alt='spinner' /></div>}
                    <p style={{ margin: "5px 0" }}>Forgot your password? <Link href='/reset-password'>Reset password</Link></p>
                </fieldset>
            </Form>
            <p className='separator'> Or </p>
            <section id="OAuth-signup">
                <button id="facebook-button" type="button">Sign in with Facebook</button>
                <button id="gmail-button" type="button">Sign in with Gmail</button>
            </section>
        </SignInStyle>
    )
};
export default SignIn;