import styles, { layout } from "../style";
import { cta } from "../assets";
import Button from "../components/Button";
const Platform = () => (
  <div className={`${layout.section} flex-col-reverse gap-x-24`}>
    <div className={`${layout.sectionImg}  mt-20 md:mt-0`}>
      <img src={cta} alt="cta image" />
    </div>
    <div className={`${layout.sectionInfo}  gap-y-7 `}>
      <h2 className={`${styles.heading2}`}>
        {" "}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Join <span className="text-gradient"> World's largest </span>learning
        platform today{" "}
      </h2>
      <p className={`${styles.sectionParagraph}`}>
        Start learning by registering for free
      </p>
      <Button styles={"text-white md:self-auto self-stretch py-5"} />
    </div>
  </div>
);

export default Platform;
