import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollBurger from './components/ScrollBurger';
import About from './components/About';
import PlaceholderSection from './components/PlaceholderSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollBurger />
        <About />
        <PlaceholderSection
          id="menu"
          title="The Menu"
          note="Our full lineup of burgers, wings, and sides is being plated up. Check back soon."
        />
        <PlaceholderSection
          id="location"
          title="Find Us"
          note="We're picking the perfect spot to serve you. Location details dropping soon."
        />
      </main>
      <Footer />
    </>
  );
}
