import { courses } from "../constant";
import styles from "../style";
import CourseCard from "../components/CourseCard";
import Slider from "react-slick";
import "../slick/slick-theme.css";
import "../slick/slick.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
  ],
};
const Courses = () => (
  <div className="bg-green-100 py-24">
    <div className={`${styles.container}`}>
      <div>
        <h2 className={` ${styles.heading2}`}>
          Most Popular <span className="text-gradient"> Courses</span>
        </h2>
        <p className={`${styles.sectionParagraph}`}>
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>
      <Slider {...settings} className="py-10">
        {courses.map((course) => (
          <div key={course.id}>
            <div>
              <CourseCard {...course} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default Courses;
