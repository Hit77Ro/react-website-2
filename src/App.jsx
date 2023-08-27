import { Nav, Hero, Footer } from "./Sections";
import styles from "./style";
import Courses from "./Sections/Courses";
import Achievements from "./Sections/Achievements";
import Categories from "./Sections/Categories";
import Platform from "./Sections/Platform";

const App = () => (
  <div className="">
    <section className={`${styles.container}`}>
      <Nav />
    </section>

    {/* main content  */}
    <main>
      <section className={`${styles.container}`}>
        <Hero />
      </section>
      <Courses />
      <section className={`${styles.container}`}>
        <Achievements />
      </section>
      <Categories />
      <section className={`${styles.container}`}>
        <Platform />
      </section>
      <Footer />
    </main>
  </div>
);

export default App;
