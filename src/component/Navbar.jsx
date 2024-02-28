import * as React from "react";
import { Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

export default function NavbarComponent() {
  const location = useLocation();
  console.log("ini location", location);
  //   const [url, setUrl] = useState(null);
  //   React.useEffect(() => {
  //     setUrl(location.pathname);
  //   }, [location]);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
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
