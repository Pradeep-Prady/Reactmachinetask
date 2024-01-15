import React, { useState } from "react";
import Pagination from "react-js-pagination";

export default function Table({ chartData }) {
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };

  return (
    <div className="w-full p-2 md:px-5 md:py-3 ">
      <div className="glass">
        <div className="flex items-center bg-stone-900 text-white  p-3 font-semibold">
          <div className="w-[10%]">
            <h2>Id</h2>
          </div>
          <div className="w-[30%]">
            <h2>Name</h2>
          </div>{" "}
          <div className="w-[30%]">
            <h2>Quantity</h2>
          </div>{" "}
          <div className="w-[30%]">
            <h2>Price</h2>
          </div>
        </div>

        {chartData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center border  p-3 text-px] font-semibold ${
              index % 2 === 0 ? "bg-[#f6f6f6]" : "bg-white"
            }`}
          >
            <div className="w-[10%] ">
              <h2>{item.id}</h2>
            </div>
            <div className="w-[30%]">
              <h2>{item.name}</h2>
            </div>{" "}
            <div className="w-[30%]">
              <h2>{item.quantity}</h2>
            </div>{" "}
            <div className="w-[30%]">
              <h2>{item.price}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5">
        <Pagination
          className="pagination"
          activePage={currentPage}
          onChange={setCurrentPageNo}
          totalItemsCount={100}
          itemsCountPerPage={5}
          nextPageText={"Next"}
          firstPageText={"First"}
          lastPageText={"Last"}
          itemClass="page-item"
          linkClass="page-link text-[12px] sm:text-[18px] px-2 sm:px-4 py-2 rounded-sm page-glass"
        />
      </div>
    </div>
  );
}
