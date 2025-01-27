import Link from "next/link";

const credit = "<SammyLeths />";

const Footer = () => {
  return (
    <div className="flex w-full px-4 lg:px-8 fixed bottom-0 p-2 bg-[#182825]/40 text-white text-sm">
      A sandbox project by &nbsp;
      <Link
        className="font-bold hover:text-[#182825]"
        href="https://www.sammyleths.com"
        target="_blank"
      >
        {credit}
      </Link>
    </div>
  );
};

export default Footer;
