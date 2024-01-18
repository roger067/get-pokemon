import { Link } from '@tanstack/react-router';

const Header = () => (
  <header className="mb-5 bg-red-500 shadow-xl">
    <div className="container mx-auto p-4">
      <Link to="/">
        <span className="block text-2xl text-white text-center font-bold">
          Pokedex
        </span>
      </Link>
    </div>
  </header>
);

export default Header;
