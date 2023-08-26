//Navbar component//
//---------------//

const Nav = () => {
  const logo = "./am-logo.png";
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="am-logo" width="50" height="50" />
          Akademia Maturzystów
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleContent"
          aria-controls="collapsibleContent"
          aria-expanded="false"
          aria-label="nav toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#home"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kursy
              </a>
              <ul className="dropdown-menu">
                <li>
                  <p className="mb-2">Test</p>
                </li>
                <li>
                  <p className="mb-2">Test</p>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                O nas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
