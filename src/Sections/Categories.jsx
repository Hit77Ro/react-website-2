import { categories } from "../constant";
import styles, { layout } from "../style";
import CategoryCard from "../components/CategoryCard";

const Categories = () => (
  <div className={`bg-green-100 ${layout.section}`}>
    <div className={`${styles.container}`}>
      <div>
        <h2 className={`${styles.heading2}`}>
          Most
          <span className="text-gradient"> Popular Categories</span>
        </h2>
        <p className={`${styles.sectionParagraph}`}>
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>
      <div className="mt-16 flex flex-wrap gap-2 ">
        {categories.map((obj) => (
          <CategoryCard key={obj.label} {...obj} />
        ))}
      </div>
    </div>
  </div>
);

export default Categories;
