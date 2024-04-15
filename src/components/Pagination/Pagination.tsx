import "./Pagination.css";
const Pagination = ({
  handlePageChange,
  currentPage,
  totalPage,
  customStyle,
}: {
  handlePageChange:
    | React.Dispatch<React.SetStateAction<number>>
    | ((page: number) => void);
  currentPage: number;
  totalPage: number;
  customStyle?: string;
}) => {
  const handlePagination = (current: number) => {
    if (current > totalPage || current < 1) {
      return;
    }
    handlePageChange(current);
  };

  const skipCurrent = (type: string, howMany: number) => {
    if (
      (currentPage === 1 && type === "pre") ||
      (currentPage === totalPage && type === "next")
    ) {
      return 0;
    } else if (type === "pre" && currentPage - howMany >= 1) {
      handlePageChange(currentPage - howMany);
    } else if (type === "next" && currentPage + howMany <= totalPage) {
      handlePageChange(currentPage + howMany);
    }
  };
  const singlePageNumber = (index: number) => {
    return (
      <li
        onClick={() => handlePagination(index)}
        key={index}
        className={`single-pagination-number ${
          currentPage === index ? " active" : ""
        }`}
      >
        <p>{index}</p>
      </li>
    );
  };
  const skipPageNumber = (type: string, howMany: number) => {
    return (
      <li>
        <p
          onClick={() => skipCurrent(type, howMany)}
          className="skip-pagination-button"
        >
          ...
        </p>
      </li>
    );
  };
  const nextPreButton = (btnText: string, handleClick: () => void) => {
    return (
      <button
        className={`pagination-next-pre-button ${
          (currentPage === 1 && btnText === "Previous") ||
          (currentPage === totalPage && btnText === "Next")
            ? "disabled"
            : ""
        }`}
        onClick={() => handleClick()}
      >
        {btnText}
      </button>
    );
  };
  const nextPreButtonRender = () => {
    return (
      <>
        {nextPreButton("Previous", () => handlePagination(currentPage - 1))}
        {nextPreButton("Next", () => handlePagination(currentPage + 1))}
      </>
    );
  };
  return (
    <div className={`pagination-container ${customStyle ? customStyle : ""}`}>
      <ul className="all-pagination-numbers">
        {totalPage < 7 ? (
          <>
            {Array.apply(0, Array(totalPage)).map((arr, i: number) =>
              singlePageNumber(i + 1)
            )}
          </>
        ) : currentPage % 5 >= 0 &&
          currentPage > 4 &&
          currentPage + 2 < totalPage ? (
          <>
            {singlePageNumber(1)}
            {skipPageNumber("pre", 2)}
            {singlePageNumber(currentPage - 1)}
            {singlePageNumber(currentPage)}
            {singlePageNumber(currentPage + 1)}
            {skipPageNumber("next", 2)}
            {singlePageNumber(totalPage)}
          </>
        ) : currentPage % 5 >= 0 &&
          currentPage > 4 &&
          currentPage + 2 >= totalPage ? (
          <>
            {singlePageNumber(1)}
            {skipPageNumber("pre", currentPage - (totalPage - 5))}
            {/* {Array.apply(0, Array(5)).map((arr, i) => singlePageNumber(i + 16))} */}
            {Array.from({ length: 5 }, (_, i) => i + totalPage).map((arr, i) =>
              singlePageNumber(i + totalPage - 4)
            )}
          </>
        ) : (
          <>
            {Array.apply(0, Array(5)).map((arr, i) => singlePageNumber(i + 1))}
            {skipPageNumber("next", 6 - currentPage)}
            {singlePageNumber(totalPage)}
          </>
        )}
      </ul>
      <div className=" pagination-next-pre-button-container">
        {nextPreButtonRender()}
      </div>
    </div>
  );
};

export default Pagination;
