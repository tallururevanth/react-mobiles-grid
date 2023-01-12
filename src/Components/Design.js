import React from 'react';

const Design = (props) => {
  const { name, img_path, mrp, selling} = props.mobiledata;
  const opr = mrp.replace("₹", "");
  const op = opr.replace(",", "");
  const spr = selling.replace("₹", "");
  const sp = spr.replace(",", "");
  const disc = (((op-sp)/op)*100);
  if (1 == 2) {
    return <p>"loading..."</p>;
  }
  return (
    <div className="col-4">
      <img src={img_path} />
      <h5 className="text-danger">{name}</h5>
      <p className="text-success">
        M.R.P<span className="text-danger">:</span>
        <span>{mrp}</span>
      </p>
      <p className="discount">{disc.toFixed(1)}% Discount</p>
      <p className="text-secondary">
        Selling Price<span className="text-danger">:</span>
        <span>{selling}</span>
      </p>
      <p className="text-info">
        Rating<span className="text-danger">:</span>
        <span>{props.mobiledata.rating}</span>
      </p>
      <p className="text-justify text-primary">
        <span className="demo">Highlights</span>
        <span className="text-danger">:</span>
        {/* <ul>
          {props.mobiledata.highlights != null &&
            props.mobiledata.highlights.map((comment) => {
              return <li>{comment}</li>;
            })}
        </ul> */}
        <ul>
          {props.mobiledata.highlights == null ? (
            <p>No Comments </p>
          ) : (
            props.mobiledata.highlights.map((comment) => {
              return <li>{comment}</li>;
            })
          )}
        </ul>
      </p>
    </div>
  );
};
export default Design;
