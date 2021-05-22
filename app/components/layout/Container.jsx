const Container = ({ children, max = "6xl" }) => {
  return (
    <div
      className={`container mx-auto px-4 sm:px-10 md:px-20 xl:px-0 max-w-${max}`}
    >
      {children}
    </div>
  );
};

export default Container;
