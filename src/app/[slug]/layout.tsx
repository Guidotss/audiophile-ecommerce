import { Footer, NavBar } from "@/components";


interface ProductLayoutProps {
  children: React.ReactNode;
}

const metadata ={ 
  title: "Product Layout",
  description: "Product Layout",
}

export default function ProductLayOuyt({ children }: ProductLayoutProps) {
  return (
    <main className="w-full h-screen">
      <header className="bg-black w-full py-10 border-smoke_white sticky text-white items-center">
        <NavBar />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
