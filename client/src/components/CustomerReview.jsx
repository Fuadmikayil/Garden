import "../styles/customerReviews.scss";
import people from "../assets/people.svg";
export default function CustomerReview() {
  return (
    <section className="Customer-wrapper container">
      <h1 className="text-center">
        Customer Review
        <div></div>
        <div></div>
      </h1>
      <div className="Customer">
        <img src={people} alt="Customer" />
        <div className="Customer-about">
          <div className="Customer-about-head">
            <h1>
              4.2 <i className="bx bxs-star"></i>
            </h1>
            <div>
              <h3>Danny Sena</h3>
              <h5>Co-Founder of XYZ Company</h5>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <a href="#">Drop Comment</a>
        </div>
      </div>
    </section>
  );
}
