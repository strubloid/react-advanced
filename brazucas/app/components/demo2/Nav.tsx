"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LoadingMessage, NavContainer, NavLink } from "./StyledElements";

const Nav = () => {
    const pathname = usePathname();
    const [targetPath, setTargetPath] = useState<string | null>(null);
    const state = targetPath !== null && targetPath !== pathname ? "loading" : "idle";

    return (
        <NavContainer>
            <NavLink href="/" onClick={() => setTargetPath("/")}>Main</NavLink>
            <NavLink href="/books" onClick={() => setTargetPath("/books")}>Books</NavLink>
            <NavLink href="/club" onClick={() => setTargetPath("/club")}>Club</NavLink>
            {state === "loading" && <LoadingMessage>Loading...</LoadingMessage>}
        </NavContainer>
    );
};

export default Nav;
