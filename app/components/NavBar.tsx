"use client";

import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Navbar isBordered>
            <NavbarContent className="" justify="start">
                <NavbarMenuToggle className={"sm:invisible"} />
                <NavbarBrand>
                    <p className="font-bold text-inherit">GYMAPP</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex" justify="center">
                <NavbarItem isActive={pathname === "/"}>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                {isLoggedIn && (
                    <NavbarItem isActive={pathname === "/profile"}>
                        <Link color="foreground" href="/profile">
                            Profile
                        </Link>
                    </NavbarItem>
                )}
            </NavbarContent>
            {!isLoggedIn ? (
                <NavbarContent className={"hidden sm:flex"} justify="end">
                    <NavbarItem className="lg:flex">
                        <Link href="#" onClick={() => setIsLoggedIn(true)}>
                            Login
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="flat"
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            ) : (
                <NavbarContent className={"hidden sm:flex"} justify="end">
                    <NavbarItem className="lg:flex">
                        <Link href="#" onClick={() => setIsLoggedIn(false)}>
                            Logout
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            )}
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link className="w-full" href={"/"}>
                        Home
                    </Link>
                </NavbarMenuItem>
                {isLoggedIn ? (
                    <>
                        <NavbarMenuItem>
                            <Link className="w-full" href={"/"}>
                                Profile
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <Link
                                className="w-full"
                                href={"/"}
                                onClick={() => setIsLoggedIn(false)}
                            >
                                Logout
                            </Link>
                        </NavbarMenuItem>
                    </>
                ) : (
                    <>
                        <NavbarMenuItem>
                            <Link className="w-full" href={"/"}>
                                Login
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <Link className="w-full" href={"/"}>
                                Sign Up
                            </Link>
                        </NavbarMenuItem>
                    </>
                )}
            </NavbarMenu>
        </Navbar>
    );
}
