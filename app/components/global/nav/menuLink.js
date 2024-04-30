import Link from "next/link";

export default function MenuLink(props) {
  const link = props.link;
  const title = props.title;
  const textColor = "hover:text-" + props.mycolor;

  return (
    <Link
      className={"font-bold mx-2 sm:text-xl text-black " + textColor}
      href={link}
    >
      {title}
    </Link>
  );
}
