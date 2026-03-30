import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Philosophy } from "@/components/philosophy";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
