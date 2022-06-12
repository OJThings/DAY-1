import React from "react";
import { Button } from "./Button";
import Hero from "./Hero";
import { SliderData } from "../data/SliderData";
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
} from "./InfoSectionElements";

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            <Button to="/homes" primary="true">
              {buttonLabel}
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={image} alt="home" />
          </ColumnRight>
        </Container>
        <Hero slides={SliderData} />
      </Section>
    </>
  );
};

export default InfoSection;
