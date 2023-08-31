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

const MainVisual = styled.div`
  margin-top: 80px;
  position:relative;
  width:100%;
  height: 1000px;
  background: url('/desktop-bg.png') no-repeat top center;
  background-size: cover;

  .bg {
    position: absolute;
    top:0;
    left:0;
  }
`;

const MobileMainVisual = styled.div`
  margin-top: 80px;
  position:relative;
  width:100%;
  height: 620px;
  background: url('/desktop-bg.png') no-repeat top center;
  background-size: cover;

  .bg {
    position: absolute;
    top:0;
    left:0;
  }
`;

const BoxContent = styled.section<{ $width: string, $flexDirection: string }>`
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: ${props => props.$flexDirection};

  & > div {
    width: ${props => props.$width};
    aspect-ratio: 1/1;
  }
`;

const LeftBox = styled.div`
  background-color: pink;
  font-size: 30px;
  text-align:center;
`;

const RightBox = styled.div`
  background-color: skyblue;
  font-size: 30px;
  text-align:center;
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

export default function Container() {
  const [view, setViewport] = useState()
  const { width, isMobile, isTablet } = useViewport();

  return (
    <>
      {/* Header */}
      {isTablet ? <MobileHeader>{`Mobile: ${width}px`}</MobileHeader> : <Header>{`Desktop: ${width}px`}</Header>}

      {/* MainVisual */}
      {isMobile ? <MobileMainVisual /> : <MainVisual />}

      {/* BoxContent */}
      <BoxContent
        $width={isMobile ? "100%" : "50%"}
        $flexDirection={isMobile ? "column" : "none"}>
        <LeftBox>1</LeftBox>
        <RightBox>2</RightBox>
      </BoxContent>

      {/* Footer */}
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