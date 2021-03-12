import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Top = styled.View`
  flex: 1;
  background-color: black;
`;

const Bottom = styled.View`
  flex: 1;
  background-color: black;
`;

export default function SelectPhoto() {
  return (
    <Container>
      <Top />
      <Bottom />
    </Container>
  );
}
