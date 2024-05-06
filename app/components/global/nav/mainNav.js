import MenuLink from "./menuLink";

export default function MainNav() {
  const navLinks = [
    { name: "Home", link: "/" },
    {
      name: "Estimators",
      link: "/estimators",
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
