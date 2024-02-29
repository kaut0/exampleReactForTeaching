import * as React from "react";
import { Avatar, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

export default function NavbarComponent() {
  const location = useLocation();
  console.log("ini location", location);
  //   const [url, setUrl] = useState(null);
  //   React.useEffect(() => {
  //     setUrl(location.pathname);
  //   }, [location]);
  return (
    <Navbar
      className="bg-gradient-to-r from-cokelatKuning-900 to-cokelatKuning-50"
      fluid
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="md:order-1 w-max hidden sm:block md:block">
        <form class="w-96">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </form>
      </div>
      <div className="flex md:order-2 justify-between w-40">
        <Navbar.Toggle className="bg-transparent" />
        <Avatar className="hidden sm:block" rounded />
        <Avatar className="hidden sm:block" rounded />
        <Avatar className="hidden sm:block" rounded />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className="mx-8 sm:mx-0"
          href="/"
          active={location.pathname === "/" ? true : false}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          className="mx-8 sm:mx-0"
          href="/about"
          active={location.pathname === "/about" ? true : false}
        >
          About
        </Navbar.Link>
        <Navbar.Link className="mx-8 sm:mx-0" href="#" active={false}>
          Services
        </Navbar.Link>
        <Navbar.Link className="mx-8 sm:mx-0" href="#" active={false}>
          Pricing
        </Navbar.Link>
        <Navbar.Link className="mx-8 sm:mx-0" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
