"use client";
import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link"; // Import the Link component

const HomePage = () => {
  const linkStyle = {
    color: "#D4D4D4",
    fontSize: "22px",
    fontFamily: "Space Grotesk",
    fontWeight: "600",
    textTransform: "uppercase",
    wordWrap: "break-word",
  };

  const titleStyle = {
    color: "white",
    fontSize: "88px",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    textTransform: "uppercase",
    wordWrap: "break-word",
  };

  return (
    <section className="homepage-bg">
      {/* Navbar with custom styling */}
      <Navbar isBordered shouldHideOnScroll className="bg-transparent px-10 justify-end">
        <NavbarContent className="flex justify-end items-center gap-10">
          <NavbarItem>
            <Link href="/sections/about" style={linkStyle}>
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/sections/tracks" style={linkStyle}>
              Tracks
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/sections/schedule" style={linkStyle}>
              Schedule
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/sections/faq" style={linkStyle}>
              FAQ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/sections/sponsors" style={linkStyle}>
              Sponsors
            </Link>
          </NavbarItem>

          {/* Apply button */}
          <NavbarItem>
            {/* Change this to the external link or page link */}
            <Link href="https://lu.ma/i3zb0h5t" passHref target="_blank">
              <div
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "0px",
                    height: "44px",
                    backgroundColor: "#314CC2",
                  }}
                />
                <div
                  style={{
                    color: "#314CC2",
                    fontSize: "22px",
                    fontFamily: "Space Grotesk",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    wordWrap: "break-word",
                  }}
                >
                  Apply
                </div>
              </div>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Emory Hacks 2025 Title */}
      <div className="content pt-20 text-center">
        <div style={titleStyle}>Emory Hacks 2025</div>
      </div>
    </section>
  );
};

export default HomePage;
