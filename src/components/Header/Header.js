import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header container">
        <div className="row justify-content-center align-items-center h-100">
          <span className="logo col">PR</span>
          <nav className="navigationbar col">
            <ul className="d-flex justify-content-between list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
