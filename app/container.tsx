'use client'
import { useState } from "react";
import { styled } from "styled-components"
import { useViewport } from "./use-viewport-hook";

const Header = styled.header`
  position: fixed;
  z-index: 1000;
  top:0;
  left:0;
  width: 100%;
  height: 80px;
  background-color: green;
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 80px;
`;

const MobileHeader = styled.header`
  position: fixed;
  z-index: 1000;
  top:0;
  left:0;
  width: 100%;
  height: 80px;
  background-color: #21dd21;
  color: green;
  font-size: 30px;
  text-align: center;
  line-height: 80px;
`;

const Footer = styled.footer`
  background-color: yellow;

  ul {
    max-width: 1280px;
    width: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align: center;

    li {
      padding: 50px;
    }
  }
`;

const MobileFooter = styled.footer`
  background-color: #ff8000;

  ul {
    max-width: 1280px;
    width: 100%;
    margin: auto;
    text-align: center;

    li {
      padding: 20px;
    }
  }
`;

type Children = {
  children: React.ReactNode;
}

export default function Container({ children }:Children) {
  const { width, isMobile, isTablet } = useViewport();

  return (
    <>
      {isTablet ? <MobileHeader>{`Mobile: ${width}px`}</MobileHeader> : <Header>{`Desktop: ${width}px`}</Header>}
      {children}
      {isMobile ? (
        <MobileFooter>
          <ul>
            <li>content 1</li>
            <li>content 2</li>
            <li>content 3</li>
          </ul>
        </MobileFooter>
      ) : (
        <Footer>
          <ul>
            <li>content 1</li>
            <li>content 2</li>
            <li>content 3</li>
          </ul>
        </Footer>
      )}
    </>
  )
}