import {GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {FormEvent, useState} from "react";

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> {
    const isAuthorized = false;
    if (isAuthorized) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            }
        }
    }
    return {props: {}};
}

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Submit handler for sign in form.
    function signUpUser(event: FormEvent<HTMLFormElement>) {
        // Prevent page redirection
        event.preventDefault();

        // Validate correct input
        if (!email || !password) {
            alert("All fields are required.")
            return
        }
    }

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>
            <main className="container mx-auto flex flex-col justify-center">
                <h1 className="text-center text-2xl mb-5">Sign In</h1>
                <form className="flex flex-col">
                    <input id="email" type="email" name="email" placeholder="Email"
                           className="p-2 bg-slate-200 mb-5 rounded-lg"
                           onChange={event => setEmail(event.target.value)}/>
                    <input id="password" type="password" name="password" placeholder="Password"
                           className="p-2 bg-slate-200 mb-5 rounded-lg"
                           onChange={event => setPassword(event.target.value)}/>
                    <button type="submit"
                            className="p-2 mb-5 rounded-lg bg-lime-300">Sign In
                    </button>
                </form>
                <small className="text-center">
                    Don't have an account? <a href="/signup" className="underline">Sign Up.</a>
                </small>
            </main>
            <Footer/>
        </div>
    )
}