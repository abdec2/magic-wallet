import { useState, FormEvent } from "react";
import { useLogin } from "../../context/UserContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";


const Signup = (): JSX.Element => {
    const [email, setEmail] = useState("");

    const login = useLogin();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        login(email);
    };

    return (
        // <section className={styles.signup}>
        //     <h1>Magic Wallet</h1>
        //     <img src="images/main-image.svg" alt="Magic Wallet" />
        //     <span>Log in to your wallet</span>
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             placeholder="hello@example.com"
        //         />

        //         <button type="submit">Log in</button>
        //     </form>
        // </section>
        <div className="email-form d-flex flex-column align-items-center justify-content-center m-auto p-3 border rounded-3">
            <div className="emailForm__text p-3">
                <span>Sign in to <span className="text-primary">NordicPay</span></span>
            </div>

            <div className="emailForm__logo mb-3">
                <Image  src={'/images/logo.webp'} style={{border: 'none'}} thumbnail />
            </div>

            <div className="px-5 w-100">
                <Form onSubmit={handleSubmit} className="w-100 mb-5">
                <Form.Control
                    className="rounded-3 w-100 mb-3"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="primary" type="submit" className="w-100 rounded-pill">Login</Button>

                </Form>
            </div>
            </div>
    );
};

export default Signup;
