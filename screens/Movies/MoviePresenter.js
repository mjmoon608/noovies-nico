import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";
// import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("screen");

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const Text = styled.Text``;

export default () => (
  <Header>
    <Swiper>
      <Section>
        <Text>Hello1</Text>
      </Section>
      <Section>
        <Text>Hello2</Text>
      </Section>
      <Section>
        <Text>Hello3</Text>
      </Section>
    </Swiper>
  </Header>
);
