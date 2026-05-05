// /app/examples/layout.tsx

import { Suspense } from "react";
import styled from "styled-components";
import Link from "next/link";

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 6xl;
  text-align: center;
  margin-top: 8rem;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 2xl;
`;

const NavContainer = styled.div`
  margin-top: 8rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppContainer>
            <Heading>Advanced React - Codelicks Academy</Heading>
            <NavContainer>
                <Nav>
                    <Link href="/examples">Home</Link>
                    <Link href="/examples/about">About</Link>
                    <Link href="/examples/contact">Contact</Link>
                </Nav>
            </NavContainer>
            <Suspense fallback={<h3>Loading...</h3>}>
                {children}
            </Suspense>
        </AppContainer>
    );
}
