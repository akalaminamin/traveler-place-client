import react, { useState, useEffect } from "react";
const ServicePagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const numberOfButtons = Math.ceil(total / showPerPage);
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);
  const buttonClickHandler = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <ul className="pagination d-flex align-items-center justify-content-center mb-5">
      <li className="page-item">
        <a
          className="page-link"
          role="button"
          onClick={() => buttonClickHandler("prev")}
        >
          Previous
        </a>
      </li>
      {new Array(numberOfButtons).fill("").map((el, index) => (
        <li className={`page-item ${index + 1 == counter ? "active" : null}`} key={index}>
          <a
            className="page-link"
            role="button"
            onClick={() => setCounter(index + 1)}
          >
            {index + 1}
          </a>
        </li>
      ))}
      <li className="page-item">
        <a
          className="page-link"
          role="button"
          onClick={() => buttonClickHandler("next")}
        >
          Next
        </a>
      </li>
    </ul>
  );
};

export default ServicePagination;
