export const Section1 = () => {
  return (
    <section className="section section1">
      <div className="section-content ">
        <h2> Light, Fast & Powerful </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="section1-subcontent-container">

        <div className="section1-subcontent">
          <img src="/src/assets/section1-icon2.svg" />
          <h3> Title Goes Here </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.{" "}
          </p>
        </div>
        <div className="section1-subcontent">
          <img src="/src/assets/section1-icon2.svg" />
          <h3> Title Goes Here </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.{" "}
          </p>
        </div>

        </div>
      </div>
      <img src="/src/assets/image-section1.svg" />
    </section>
  );
};
