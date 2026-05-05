import { JSX } from "react";
import styled from "styled-components";
import Home from "@app/components/LazyLoadingCodeSpliting/Home";
import About from "@app/components/LazyLoadingCodeSpliting/About";
import Contact from "@app/components/LazyLoadingCodeSpliting/Contact";

// import { Link, Route, Routes } from "react-router-dom";
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

export const CodeSplitingAndLazyLoadingExample = (): JSX.Element => {

    return (
        <AppContainer>
            <Heading>Advanced React - Codelicks Academy</Heading>
            <NavContainer>
                <Nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </Nav>
            </NavContainer>
        </AppContainer>
    );
};
