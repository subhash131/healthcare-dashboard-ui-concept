const Pin = ({ position }: { position: string }) => {
  return (
    <div
      className={`backdrop-blur-md bg-white/30 border border-gray-100  w-8 h-8 absolute z-10 bg- flex justify-center items-center rounded-full ${position}`}
    >
      <div className="bg-white w-4 h-4 rounded-full"></div>
    </div>
  );
};

export default Pin;
