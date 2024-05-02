import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="flex sm:container mx-auto" style={{ maxWidth: 1024 }}>
        <div className="flex p-2">
          <p className="pl-1 self-center text-lrg " id="disclaimer">
            <span className="font-bold">*Created by </span>
            <Link
              href={"https://www.justcreativedesign.ca/"}
              className="text-green-800 hover:font-bold"
              target="_blank"
            >
              JustCreativeDesigns
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
