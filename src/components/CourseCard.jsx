const CourseCard = ({ id, img, price, title, category }) => (
  <div
    className={` z-10 ml-5  flex flex-col gap-y-4 overflow-hidden  rounded-3xl bg-white  `}
  >
    <div className="relative flex-1" id={id}>
      <span className="absolute left-4 top-4 block rounded-sm bg-white p-1 px-3 text-[13px] text-slate-700">
        {category}
      </span>
      <img src={img} alt="" className="block w-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="truncate"> {title} </h3>
      <h4 className="mt-5 border-t border-t-slate-400 py-4 text-xl">
        {" "}
        {price}{" "}
      </h4>
    </div>
  </div>
);
export default CourseCard;
