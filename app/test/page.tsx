'use client'
import { styled } from "styled-components";
import Container from "../container";
import { useViewport } from "../use-viewport-hook";
import Link from "next/link";

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

export default function Test() {
  const { width, isMobile, isTablet } = useViewport();
  return (
    <Container>
      {isMobile ? <MobileMainVisual /> : <MainVisual />}
      <h1>TEST</h1>
      <Link href={"/"}>HOME</Link>
    </Container>
  )
}