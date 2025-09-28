import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-svw h-20 flex items-center justify-center">
      <Link
        href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
        target="_blank"
        className="text-white underline"
      >
        MLH Code of Conduct
      </Link>
    </footer>
  );
};

export default Footer;
