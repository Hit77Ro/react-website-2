import { companies, heroImg } from "../assets";
import { searchIcon } from "../assets";
import styles, { layout } from "../style";
const Hero = () => (
  <div className="pb-24">
    <div className={`${layout.section} gap-10 `}>
      <div className={`${layout.sectionInfo} gap-y-4`}>
        <h1 className="text-gradient font-mono text-[30px] leading-7">
          {" "}
          start to success{" "}
        </h1>
        <h2 className="font-poppins text-[40px] font-semibold  sm:text-[64px]">
          Access To <span className="text-gradient "> 5000+</span> Courses from{" "}
          <span className="text-gradient">300</span> Instructors & Institutions
        </h2>
        <p className={`${styles.paragraph}`}>
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <div className="relative mt-6 flex w-full items-center rounded-md border border-slate-200 py-7">
          <input
            type="text"
            className=" input-drop-shadow absolute inset-0 h-full w-full pl-4 focus:outline-none"
            placeholder="what do you want to learn"
          />
          <img
            src={searchIcon}
            className="z-1 absolute right-4 h-7 cursor-pointer"
          />
        </div>
      </div>
      <div className={`${styles.flexCenter} flex-1`}>
        <img src={heroImg} alt="hero  image" className="object-cover" />
      </div>
    </div>
    <div className={`${layout.sectionInfo}  items-center gap-y-2`}>
      <h3 className="text-[27px] font-semibold text-blue-950">
        Trusted by over 25,000 teams around the world.
      </h3>
      <p className={`${styles.paragraph} flex-1 text-justify text-blue-900  `}>
        Leading companies use the same courses to help employees keep their
        skills fresh.
      </p>
      <div className="flex flex-wrap gap-x-4">
        {" "}
        {companies.map((company) => (
          <img key={crypto.randomUUID()} src={company} alt="company" />
        ))}{" "}
      </div>
    </div>
  </div>
);
export default Hero;
