const Button = ({ text = "sign up for free", icon, styles }) => {
  return (
    <button
      className={`flex  items-center  justify-center  gap-x-2 rounded-md bg-primary p-3  ${styles} `}
    >
      {icon && <img src={icon} alt="icon" />}
      {text}
    </button>
  );
};

export default Button;
