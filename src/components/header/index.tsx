import Navigation from "./navigation";
import Logo from "./Logo";

function Header() {
  return (
    <header className="z-20 px-8 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
