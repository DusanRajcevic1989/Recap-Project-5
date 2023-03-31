import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  height: 50px;
  padding: 40;
  margin: 40;
  align-content: center;
  justify-content: center;
  background-color: #6495ed;
  border-width: 10px;
  border-color: black;
`;
const StyledNav = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 82px;
  padding: 20;
  margin: 40;
  justify-content: center;
`;

export default function Navigation() {
  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <Link href="../art-pieces">Pieces</Link>
          <Link href="../">Spotlight</Link>
          <Link href="../favorites">Favorites</Link>
        </StyledNav>
      </StyledHeader>
    </div>
  );
}
