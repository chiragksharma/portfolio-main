import { Heading } from '@chakra-ui/react';

const Skills = () => {
    return (
    <>
    <div>
        <Heading as='h2' fontFamily='Open Sans' fontWeight='80px' fontSize= '50px'  colorScheme='cyan' style={{color:'cyan'}} >
          SKILLS
        </Heading>
        <p style={{fontFamily: 'Open Sans', marginTop: '10px'}}>
        Data Structures and Algorithms, Frontend Development, Backend Development, <br />
        Database Management, System Design and Cloud.
        </p>
        <Heading as='h2' fontFamily='Open Sans' mt= '20px' style={{color:'gray'}} >
            Programming
        </Heading>
        
    </div>    
    </>

    );
}
export async function getStaticProps() {
    return {
      props: { title: 'Skills' },
    };
  }
  
  export default Skills;
  