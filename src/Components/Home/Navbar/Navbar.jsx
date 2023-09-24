import { NavLink } from 'react-router-dom';
import Logo from './Logo/Logo';

const Navbar = () => {
  return (
    <div className="mt-10">
      <nav className=" flex items-center justify-between">
        <Logo></Logo>
        <div>
          <ul className="flex gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-black hover:text-red-600 hover:underline'
                    : ''
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-black hover:text-red-600 hover:underline'
                    : ''
                }
              >
                Donation
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-black hover:text-red-600 hover:underline'
                    : ''
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
