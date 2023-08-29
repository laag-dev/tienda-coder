import Category from "./Category";
import  {CartWidget}  from "./CartWidget";
import logo from '@/images/logo.png'


export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-neutral-50">
        <div className="flex-1">
          <img className="w-28 cursor-pointer" src={logo} alt="logo" />
        </div>
        <Category
          itemOne ="Accesorios"
          itemTwo ="Ropa"
          itemThree ="Suplementos"
        />
        <div className="flex-none gap-2 m-8">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <CartWidget/>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="./img/avatar.jpeg" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Perfil
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Configuración</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;