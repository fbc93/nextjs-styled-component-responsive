"use client"
import { styled } from "styled-components";
import Container from "./container";
import { useViewport } from "./use-viewport-hook";
import Link from "next/link";

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

export default function Home() {
  const { isLoaded, width, isMobile, isTablet } = useViewport();

  return (
    <div id="wrap">
      {isLoaded && (
        <Container>
          {isMobile ? <MobileMainVisual /> : <MainVisual />}
          <BoxContent
            $width={isMobile ? "100%" : "50%"}
            $flexDirection={isMobile ? "column" : "none"}>
            <LeftBox>
              <Link href={"/test"}>TEST</Link>
            </LeftBox>
            <RightBox>2</RightBox>
          </BoxContent>
        </Container>
      )}
    </div>
  )
}
