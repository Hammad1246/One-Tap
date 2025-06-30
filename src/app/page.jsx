
import Hero from "./components/Hero";
import Features from "./components/Features";
import Brands from "./components/Brands";
import CardSummary from "./components/CardSummary";
import Plan from "./components/Plan";
import OneCard from "./components/OneCard";
import Process from "./components/Process";
import Footer from "./components/Footer";

export default function Home() {
  return (
     <main className="w-screen h-auto">
      <Hero />
      <Features />
      <Brands />
      <CardSummary />
      <Plan />
      <OneCard />
      <Process />
      <Footer />
    </main>
  );
}
