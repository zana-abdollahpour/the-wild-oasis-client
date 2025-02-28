import Navigation from "./Navigation";
import Logo from "./Logo";

function Header() {
  return (
    <header className="z-20 px-2 py-3 xs:px-8 xs:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
