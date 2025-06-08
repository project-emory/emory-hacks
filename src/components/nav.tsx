import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const Nav = () => {
	return (
		<NavigationMenu viewport={false}>
			<NavigationMenuList className="absolute top-0 w-screen z-50 border-b m-0 p-2">
				<NavigationMenuItem className="m-0">
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/">Home</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem className="m-0">
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/register">Register</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Nav;
