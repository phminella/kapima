import { Form } from "./styles/Form";
import useForm from '../lib/useForm';
import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD_MUTATION } from '../lib/queries/userQueries';
import { SignInStyle } from "./styles/SignInStyle";
import Link from "next/link";

const Reset = ({ query }) => {
    console.log(query);
    const { inputs, handleChange, validEmail, emailExists } = useForm({
        email: query?.email || "",
        password: "",
        confirmPassword: "",
        token: query?.token
    });
    const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD_MUTATION, {
        variables: {
            email: query?.email,
            password: inputs.password,
            token: query?.token
        }
    })
    const emailInput = useRef();
    if (emailExists()) {
        emailInput?.current?.setCustomValidity("");
    };
    console.log(emailExists());
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!emailExists()) {
            emailInput?.current?.setCustomValidity("Insert a valid e-mail");
            emailInput?.current?.focus();
        } else if (inputs.password !== inputs.confirmPassword) {
            document.getElementById("confirmPassword").focus();
        }
        else {
            await resetPassword();
            console.log({ data, error, loading });
        }
    }
    return (
        <SignInStyle>
            <Form onSubmit={handleSubmit}>
                <h1>Choose your new password! &#127797;</h1>
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
                        {(validEmail(inputs.email) && !emailExists() && inputs.email.length > 5) && <p className="error">&#9940;Email does not exist! <Link href="/sign-up">Sign-up?</Link></p>}
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
                            className={inputs.confirmPassword !== inputs.password ? "input-error" : null}
                            onChange={handleChange}
                            minLength={8}
                            maxLength={50}
                            required
                        />
                        {(inputs.confirmPassword !== inputs.password && inputs.confirmPassword.length > 0) && <p className="error"> &#9940;Password doesnt match! </p>}
                    </label>
                    {!loading && <button type="submit">Reset Password &#128051;</button>}
                    {loading && <div className='submit-spinner'><img src="img/icon-spinner.svg" alt='spinner' /></div>}
                    {(data?.redeemUserPasswordResetToken && data?.redeemUserPasswordResetToken !== null) &&
                        <p className="error"> &#9940;Something went wrong! <Link href="/reset-password">Request reset again</Link> </p>}
                    {data?.redeemUserPasswordResetToken === null && <p> We did it! </p>}
                </fieldset>
            </Form>
        </SignInStyle>
    )
}
export default Reset;