import logocdn from "../../Utils/Data";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logocdn.LOGO_CDN} alt="logo" />
      </div>
      <div className="nav-items">
        <div>Home</div>
        <div>Category</div>
        <div>Cart</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Header;
