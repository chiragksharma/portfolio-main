import { Box, Heading, Text, VStack,Stack } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';


const AboutPage = () => {
  return (
    <>
      <Heading  as='h2' size='2xl' fontFamily='Open Sans'> Hello world </Heading>
      <hr style={{marginTop: '30px',marginBottom: '30px'}} />
      <p style={{fontFamily: 'Open Sans',color:'rgba(156,163,175)'}}>
      I am a Second Year undergraduate Computer Science Student.
19 years of living a comical life!
 I am currently exploring more about various JS liabraries  and also trying my hands on Backend Devlopment. 
Building Applications is fun. I love building services that power the future of web. I Love Video Editing as well, xD.
      </p>

      <UnorderedList style={{color: 'rgba(156,163,175)',marginTop: '30px'  ,padding:'10px'}}>
  <ListItem>I’m good in Web Development With HTML,CSS or React❤️</ListItem>
  <ListItem>Currently Learning React and working on improving my Data Structures and Algorithm skills👨‍💻</ListItem>
  <ListItem>I love making Creative Projects👨‍💻</ListItem>
  <ListItem>2022 Goals: 1. Contribute more to Open Source Projects 🏆
2. Become a Full stack Developer</ListItem>
<ListItem>I’m open for collaboration🧠 on Any kind of projects.</ListItem>
<ListItem>What is the best way to contact me? Linkedin</ListItem>
<ListItem> I love Building communities on Discord.</ListItem>



</UnorderedList>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
