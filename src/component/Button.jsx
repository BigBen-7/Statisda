/* eslint-disable react/prop-types */
const Button = ({
  label,
  bgColor,
  border,
  textColor,
  hoverBgColor,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`rounded-full p-4 py-2.5 sm:p-6 sm:py-3 md:p-8 md:py-4 text-[12px] sm:text-[14px] md:text-[16px] font-[700] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${border || ""} ${bgColor} ${textColor} hover:${hoverBgColor}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
