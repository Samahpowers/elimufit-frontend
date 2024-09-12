const VerticalNav = ({userId, isLoggedIn, clearToken, isSubscribed, isAdmin}) => {
    return (
      <div className=" vertical-nav" style={{ marginTop: '57px'}}>
        <ul className="nav flex-column">
          <li className="nav-item d-flex align-items-center ">
            <span className ="bi bi-question-circle me-2"></span>
            <a className=" nav-link" href="#howitworks">How it works</a>
          </li>
          <li className="nav-item d-flex align-items-center">
          <span className="bi bi-gear-fill me-2"></span>
            <a className="nav-link " href="#solutions">Solutions</a>
          </li>
          <li className="nav-item dropdown d-flex align-items-center">
  <span className="bi bi-book me-2"></span>
  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Resources
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li>
      <a className="dropdown-item" href="/school/resources">School Resources</a>
    </li>
    <li>
      <a className="dropdown-item" href="#job-opportunities">Job Opportunities</a>
    </li>
  </ul>
</li>

          <li className="nav-item d-flex align-items-center">
          <span className="bi bi-info-circle me-2"></span>
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item d-flex align-items-center">
          <span className="bi bi-envelope me-2"></span>
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li className="nav-item d-flex align-items-center">
          <span className="bi bi-person-circle me-2"></span>
            <a className="nav-link" href="/signup">Sign In</a>
          </li>
          <li className="d-flex align-items-center">
          {isLoggedIn ? (
            <div className="justify-center">
              <span 
                className="btn btn-outline-success btn-sm" 
                onClick={() => clearToken()} 
                style={{ whiteSpace: 'nowrap' }}
              >
                <li>
                  <a href="">Logout</a>
                </li>
              </span>
            </div>
          ) : (
            <p className="qwitcher-grypen-bold">
              elimufiti learning solutions
            </p>
          )}
        </li>
        </ul>
      </div>
    );
  };
export default VerticalNav  