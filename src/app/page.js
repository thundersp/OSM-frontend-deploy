import Hero from "../components/Hero";
import About from "../components/About";
import Contactus from "../components/Contactus";
import Faqs from "../components/Faqs";
import "./globals.css";
import GuideConnect from "@/components/GuideConnect";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>


        <section id="guideconnect">
          <GuideConnect />
        </section>

      <section id="faqs">
        <Faqs />
      </section>

      <section id="contactus">
        <Contactus />
      </section>
    </div>
  );
}
