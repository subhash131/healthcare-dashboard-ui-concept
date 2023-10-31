const CustomIcon = ({
  name,
  icon,
  selected,
  onClick,
}: {
  name: string;
  icon: React.JSX.Element;
  selected?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={` rounded-full p-2   border-white border-2 cursor-pointer w-11 text-center ${
        selected === name ? "bg-[#0067FF] text-white" : "bg-gray-100 text-black"
      } `}
      key={name}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
export default CustomIcon;
