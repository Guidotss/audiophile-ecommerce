import { Footer, NavBar } from "@/components";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-snow_white">
      <header className="bg-black w-full py-10 border-smoke_white sticky text-white items-center">
        <NavBar/>
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
