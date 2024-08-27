import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import ParticlesBG from "../components/Particles";
export default function RootLayout() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#131f24] font-sans">
        <ParticlesBG />
        <div className="absolute w-full min-w-80 bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] px-8 py-10 md:px-14 md:py-12 lg:px-20 lg:py-12 xl:px-40">
          <MainNavigation />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
