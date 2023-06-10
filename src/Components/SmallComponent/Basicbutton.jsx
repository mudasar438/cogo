const BasicButton = ({ text, width, onClick }) => {
  return (
    <>
      <button
        style={{ fontFamily: "Regular" }}
        onClick={onClick}
        className="text-[#fff] text-lg bg-[#7900EE] hover:bg-[#3A165D] min-w-[130px]  px-8 py-[15px] rounded-[24px]  font-normal  text-center"
      >
        {text}
      </button>
    </>
  );
};

export default BasicButton;
