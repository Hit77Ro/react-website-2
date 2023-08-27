import AchievementCard from "../components/AchievementCard";
import { achievements } from "../constant";
import { achievement as Img } from "../assets";
import styles, { layout } from "../style";
const Achievements = () => (
  <div className={`${layout.section}`}>
    <div className="flex-1">
      <div>
        <h2 className={`${styles.heading2}`}>
          {" "}
          our <span className="text-gradient">achievements</span>{" "}
        </h2>
        <p className={`${styles.sectionParagraph}`}>
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>
      <div className="mt-3 grid  flex-1 grid-cols-2 justify-between  gap-x-2 gap-y-14 py-10 sm:gap-x-20 md:mt-10">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.label} {...achievement} />
        ))}
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <img src={Img} className="object-cover" alt="" />
    </div>
  </div>
);

export default Achievements;
