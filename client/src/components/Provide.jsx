import React from 'react';
import "../styles/provide.scss";
import adam2 from "../assets/3d.avif";

const Provide = () => {
  return (
    <section className="Provide container">
     <div className='Provide_img'>
     <img src={adam2} alt="" />
     </div>
      <div className="Provide-about">
        <h1 className="text-center d3">
          What We Provide
          <div></div>
          <div></div>
        </h1>
        <h1>Schedule Vice Garden Maintain</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sunt veritatis fuga consequuntur neque
          perspiciatis quaerat amet ex totam delectus.
        </p>
        <h1>Schedule Vice Garden Maintain</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sunt veritatis fuga consequuntur neque
          perspiciatis quaerat amet ex totam delectus.
        </p>
        <h1>Schedule Vice Garden Maintain</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sunt veritatis fuga consequuntur neque
          perspiciatis quaerat amet ex totam delectus.
        </p>
        <div className="provide-button">
          <button>More Info</button>
          <i className="bx bx-send bx-rotate-270"></i>
        </div>
      </div>
    </section>
  );
};

export default Provide;
