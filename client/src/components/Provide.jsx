import "../styles/customerReviews.scss";

function CustomerReviews() {
  return (
    <section className="customer-wrapper container">
      <h1 className="text-center">Customer Review</h1>
      <div className="customer">
        <img src="./images/people.svg" alt="Customer" />
        <div className="customer-about">
          <div className="customer-about-head">
            <h1>4.2 <i className="bx bxs-star"></i></h1>
            <div>
              <h3>Danny Sena</h3>
              <h5>Co-Founder of XYZ Company</h5>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet...</p>
          <a href="#">Drop Comment</a>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
