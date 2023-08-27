const AchievementCard = ({ Card, label, number }) => (
  <div className="flex flex-1 ">
    {Card}
    <div className="ml-6 flex flex-col justify-between py-1">
      <h2 className="text-[20px] font-bold text-gradient md:text-[25px]">
        {number}{" "}
      </h2>
      <h3 className="text-base text-slate-500"> {label} </h3>
    </div>
  </div>
);
export default AchievementCard;
