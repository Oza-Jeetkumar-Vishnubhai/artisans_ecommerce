import React from "react";

const FilterSize = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase">Size</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize1"
              />
              <label className="form-check-label" htmlFor="flexCheckSize1">
                S <span className="text-muted">(8)</span>
              </label>
            </div>

            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize4"
              />
              <label className="form-check-label" htmlFor="flexCheckSize4">
                XL <span className="text-muted">(9)</span>
              </label>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize2"
              />
              <label className="form-check-label" htmlFor="flexCheckSize2">
                M <span className="text-muted">(10)</span>
              </label>
            </div>

            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize5"
              />
              <label className="form-check-label" htmlFor="flexCheckSize5">
                2XL <span className="text-muted">(5)</span>
              </label>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize3"
              />
              <label className="form-check-label" htmlFor="flexCheckSize3">
                L <span className="text-muted">(15)</span>
              </label>
            </div>

            <div className="form-check col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckSize6"
              />
              <label className="form-check-label" htmlFor="flexCheckSize6">
                3XL <span className="text-muted">(2)</span>
              </label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterSize;
