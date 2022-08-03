import { SignInStyle } from './styles/SignInStyle';
import { Form } from './styles/Form';
import useForm from '../lib/useForm';
import { REQUEST_RESET_MUTATION } from '../lib/queries/userQueries';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRef } from "react";
const ResetPassword = () => {
    const { inputs, handleChange, emailExists, validEmail } = useForm({
        email: ""
    });
    const [requestReset, { data, loading, error }] = useMutation(REQUEST_RESET_MUTATION, {
        variables: {
            email: inputs.email
        }
    });
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
        } else {
            await requestReset();
            console.log("email sent");
        }
    }
    return (
        <SignInStyle>
            <Form onSubmit={handleSubmit}>
                <h1>Reset your password! &#127797;</h1>
                <p>Don't have an account? <Link href="/sign-up">Sign up!</Link></p>
                <fieldset disabled={data || loading} aria-busy={loading}>
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
                    <button type="submit">Request reset &#128051;</button>
                </fieldset>
                {loading && <div className='submit-spinner'><img src="img/icon-spinner.svg" alt='spinner' /></div>}
                {data && <h4>Link to reset the password was sent to your email!&#9989;</h4>}
            </Form>
        </SignInStyle>
    )
};
export default ResetPassword;