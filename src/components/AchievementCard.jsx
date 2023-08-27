const AchievementCard = ({ Card, label, number }) => (
  <div className="flex flex-1 ">
    {Card}
    <div className="ml-3 flex flex-col justify-between py-1 sm:ml-6">
      <h2 className="text-gradient text-[20px] font-bold md:text-[25px]">
        {number}{" "}
      </h2>
      <h3 className="text-base text-slate-500"> {label} </h3>
    </div>
  </div>
);
export default AchievementCard;
