
import styles from "./page.module.css";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import ProjectsSection from "./components/Projects/ProjectSection";
import CardSortingSection from "./components/CardSorting/CardSortingSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection/>
        <AboutSection />
        <ProjectsSection />
        <CardSortingSection />
        <Footer />
      </main>
    </div>
  );
}



