export const Hero = () => {
  return (
    <div className="hero">
      <nav className="nav">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a> Contact </a>
          </li>
        </ul>
        <h1> Landing </h1>
        <a className="primary-Btn">Purchase</a>
      </nav>

      <div className="hero-content">
        <h1>Introduce Your Product Quickly & Effectively</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="hero-content-links">
          <a className="primary-Btn">Purchase UI Kit</a>
          <a className="outline-Btn">Learn More</a>
        </div>
      </div>
    </div>
  );
};
