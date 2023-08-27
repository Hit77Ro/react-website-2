import { BsArrowUpRight } from "react-icons/bs";

const CategoryCard = ({ label, icon }) => (
  <div className="group/edit flex grow cursor-pointer items-center justify-between gap-x-2 rounded-lg border bg-white  px-3 py-2 transition-all hover:border-primary">
    <div className="flex justify-start gap-4">
      {icon}
      <h1> {label} </h1>
    </div>
    <div className="rounded-md bg-slate-50 p-4 text-primary transition-all hover:bg-green-100 group-hover/edit:bg-green-400 group-hover/edit:text-white">
      <BsArrowUpRight style={{ fontWeight: 900, fontSize: 20 }} />
    </div>
  </div>
);
export default CategoryCard;
