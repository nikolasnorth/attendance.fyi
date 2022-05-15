import Banner from "../components/Banner";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo/>
      <Banner/>
    </div>
  );
}
