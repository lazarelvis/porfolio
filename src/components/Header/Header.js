import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio L.E.</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Tehnologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/lazarelvis">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/elvis-lazar-71420421b/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/elvys.lazar98/">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
