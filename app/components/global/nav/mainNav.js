import MenuLink from "./menuLink";

export default function MainNav() {
  const navLinks = [
    {
      name: "Counter Top Estimator",
      link: "/",
    },
    {
      name: "Flooring Estimate",
      link: "/flooringest",
    },
  ];

  return (
    <>
      <nav className="sm:self-center ">
        <ul className="flex">
          {navLinks.map((item, index) => (
            <li key={index}>
              <MenuLink title={item.name} link={item.link} mycolor="blue-300" />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
