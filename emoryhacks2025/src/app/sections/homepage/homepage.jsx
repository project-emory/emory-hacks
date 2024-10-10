"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const HomePage = () => {
  return (
    <section className="homepage-bg">
      <Navbar isBordered>
        <NavbarBrand>
          <p className="text-lg font-bold">Emory Hacks</p>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <Link href="#about">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#tracks">Tracks</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#schedule">Schedule</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#faq">FAQ</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#sponsors">Sponsors</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarItem>
          <Button>Register</Button>
        </NavbarItem>
      </Navbar>
      <div className="content">
        <h1 className="text-white text-center pt-20">Welcome to Emory Hacks</h1>
      </div>
    </section>
  );
};

export default HomePage;
