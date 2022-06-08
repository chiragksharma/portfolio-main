import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';
import { Box, Heading, Text, VStack,Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { FC } from "react";
import { keyframes } from "styled-components";
import github from '../public/github.svg';
import styled from "styled-components";
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/linkedinIcon';


export default function HomePage() {
  return (
    <>
    <VStack spacing={8}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pt={24}
      pb={12}>

      
      <AnimatedGradientText>Hi, I'm Chirag</AnimatedGradientText>
      <Box>
        <Heading
          as="h2"
          size="lg"
          lineHeight="tall"
          color="#718096"
          fontWeight="medium"
          fontFamily="Open Sans"
          mt='20px'
          className='subtext'
        >
          I&apos;m a{" "}
          <Box as="span" color="white" className='gray'>
            Developer
          </Box>
          , who likes{" "}
          <Box as="span" color="white" className='gray'>
            Designing,{" "}
          </Box>{" "}
          <Box as="span" color="white" className='gray'>
            Writing
          </Box>{" "}
          and{" "}
          <Box as="span" color="white" className='gray'>
            Building Open Source
          </Box>{" "}
          projects.
        </Heading>
      </Box>
      <Box>
      <Text fontSize='md' color="#A0AEC0" fontFamily="Open Sans" mt="10px" >
      An enthusiast for building tech products with full-stack software development experience.I am passionate about and capable of working with a wide range of technologies and 
      is well-versed especially in JavaScript, Python and C related tech. In addition to keeping my technical skills updated, he is always keen to learn something new.
      </Text>
      </Box>
      <Box>
        <Stack direction='row' spacing={4} mt='10px'>
          <a href="https://github.com/chiragksharma">
        <Button  colorScheme='teal' leftIcon={<GithubIcon/>} variant='outline' size='lg' style={{padding: '10px', backgroundColor: 'transparent',color:'white'}} >Github</Button>
        </a>
        <a href="https://www.linkedin.com/in/chirag-kumar-sharma-5286b51b8/">
        <Button colorScheme='teal' leftIcon={<LinkedinIcon/>} variant='outline' size='lg' style={{padding: '10px', backgroundColor: 'transparent',color:'white'}}>Linkedin</Button>
        </a>
        </Stack>
      </Box>
      </VStack>
    </>
  );
}
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 54px;
  font-weight: 800;
  line-height: 100px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
