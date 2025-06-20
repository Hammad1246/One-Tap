
import Hero from "./components/Hero";
import Features from "./components/Features";
import Brands from "./components/Brands";
import CardSummary from "./components/CardSummary";

export default function Home() {
  return (
     <main className="w-screen h-screen ">
      <Hero />
      <Features />
      <Brands />
      <CardSummary />

    </main>
  );
}
