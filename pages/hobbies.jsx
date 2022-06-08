import React from 'react';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


const Hobbies = () => {
    return (
    <>
   <div className="wrapper">
      <Card
        img="https://imgur.com/pJv1mb6.png"
        title="Youtube"
        description="Make YT videos in my free time"
       
      />

      <Card
        img="https://imgur.com/LhmYWQW.png"
        title="Blogging"
        description="Techincal blogging"
        
      />
      <Card
        img="https://imgur.com/jtrCi3T.png"
        title="Videos"
        description="Watching videos and creating them"
        
      />
      <Card
        img="https://imgur.com/ynid5eQ.png"
        title="Reading"
        description="Self-help books"
        
      />
      <Card
        img="https://imgur.com/uN7LaCx.png"
        title="Songs"
        description="Vibing"
        
      />
    </div>
    </>

    );
}
function Card(props) {
    return (
      <div className="card">
        <img src={props.img} className="card__img" />
        <div className="card__body">
          <h1 className="card__title" style={{fontFamily: 'Open Sans', fontWeight: 'bold'  }}>{props.title}</h1>
          <p className="card__description" style={{fontFamily: 'Open Sans', fontWeight: 'normal', color:'GrayText'}}>{props.description} </p>
      
        </div>
      </div>
    );
  }
export async function getStaticProps() {
    return {
      props: { title: 'hobbies' },
    };
  }
  
  export default Hobbies;
  