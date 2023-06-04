const BasicButton = ({ text, width, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="text-[#fff] text-lg bg-[#7900EE] hover:bg-[#3A165D] min-w-[130px]   px-6 py-2 rounded-3xl font-normal Rubik text-center"
      >
        {text}
      </button>
    </>
  );
};

export default BasicButton;
