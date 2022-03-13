import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div>
          <h1>Klarna</h1>
          <select name="" id="">
            <option value="">United States</option>
            <option value="">Canada</option>
            <option value="">Austrailia</option>
            <option value="">NZ</option>
          </select>
        </div>
        <div>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Legal</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Privacy</li>
          </ul>{" "}
        </div>
        <div>
          <ul>
            <li>About</li>
            <li>Contact us via app</li>
            <li>Klarna stores</li>
            <li>Contact us via app</li>
            <li>Rewards club</li>
            <li>Contact us via app</li>
          </ul>{" "}
        </div>
        <div>
          <ul>
            <li>Payment methods</li>
            <li>Sell with Klarna</li>
            <li>Operational status</li>
            <li>Press</li>
            <li>Business support</li>
            <li>Privacy</li>
          </ul>{" "}
        </div>
      </div>
    </>
  );
};
