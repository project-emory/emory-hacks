"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const HomePage = () => {
  return (
    <section className="homepage-bg">
      {/* Navbar with custom styling */}
      <Navbar isBordered shouldHideOnScroll className="bg-transparent px-10">
        <NavbarBrand>
          {/* Add your logo */}
          <p className="text-2xl font-bold text-white">Emory Hacks</p>
        </NavbarBrand>
        
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link href="#about" className="text-white text-lg">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#tracks" className="text-white text-lg">Tracks</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#schedule" className="text-white text-lg">Schedule</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#faq" className="text-white text-lg">FAQ</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#sponsors" className="text-white text-lg">Sponsors</Link>
          </NavbarItem>
        </NavbarContent>
        
        {/* "Apply" button styled as in the example */}
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} href="#" variant="flat" className="bg-pink-500 text-white hover:bg-pink-400">
              Apply
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="content">
        <h1 className="text-white text-center pt-20">Welcome to Emory Hacks</h1>
      </div>
    </section>
  );
};

export default HomePage;
