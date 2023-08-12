import logo from "./assets/logo.png";

export default function Header() {
  return (
    <>
      <nav className="navbar bg-light mb-4 p-o">
        <div className="container">
          <div className="navbar-brand">
            <div className="d-flex">
              <img src={logo} alt="logo" className="mr-2" />
              <div>Project MGMT</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
