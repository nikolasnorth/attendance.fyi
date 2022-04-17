import {GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>
            <main className="container mx-auto flex flex-col justify-center">
                <h1 className="text-center text-2xl mb-5">Sign Up</h1>
                <form className="flex flex-col">
                    <input id="email" type="email" name="email" placeholder="Email"
                           className="p-2 bg-slate-200 mb-5 rounded-lg"/>
                    <input id="password" type="password" name="password" placeholder="Password"
                           className="p-2 bg-slate-200 mb-5 rounded-lg"/>
                    <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password"
                           className="p-2 bg-slate-200 mb-5 rounded-lg"/>
                    <button type="submit"
                            className="p-2 mb-5 rounded-lg bg-lime-300">Sign Up
                    </button>
                </form>
                <small className="text-center">
                    Already have an account? <a href="/signin" className="underline">Sign In.</a>
                </small>
            </main>
            <Footer/>
        </div>
    )
}