const BasicButton = ({ text, width }) => {
  return (
    <>
      <button className="text-[#fff] text-lg bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]   px-6 py-2 rounded-3xl font-medium text-center">
        {text}
      </button>
    </>
  );
};

export default BasicButton;
