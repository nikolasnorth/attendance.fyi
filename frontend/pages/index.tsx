import {GetServerSidePropsContext, GetServerSidePropsResult} from "next";

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> {
    const isAuthorized = false;
    if (!isAuthorized) {
        return {
            redirect: {
                destination: "/signin",
                permanent: false,
            }
        }
    }
    return {props: {}};
}

export default function Home() {
    return (
        <>
            <main className="container mx-auto px-5">
                <h1>Homepage</h1>
            </main>
        </>
    )
}
