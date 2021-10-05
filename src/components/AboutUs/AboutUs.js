import React from 'react';
import { Card } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className ="about-part">
            <h2>About Dream University of Science & Technology </h2>
            <h5>Our programs transform the lives of over 2,000 students from 25 different countries every year.  With our help, they develop skills, confidence and credentials to prepare them for university.</h5>
            <p>We offer leading academic English programs, DUST Foundation Studies and higher education diplomas that are designed with DUST entry requirements in mind. Each year, over 90% of our diploma graduates achieve the marks they need to enter a DUST bachelor degree. </p>
            <h3  className= "board-directory">Board of Directors</h3>

             {/* single-card */}
  <div className="about-card p-4">
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.ibb.co/rkL0mc2/mr-kayes.jpg/100px180" />
     <Card.Body>
     <Card.Title>Mr Kayes</Card.Title>
    <Card.Text>
    BCom, MCom (UNSW), PhD (Calif), FASSA, FAICD <br /> Non-Executive Director, <br/> Chair of the Board 
    </Card.Text>
  </Card.Body>
</Card>
                {/* single-card */}
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://i.ibb.co/8c0cQK3/Portrait-of-mature-academic-person-female-professor-standing-near-blackboard-with-math-forumlas-Woma.jpg/100px180" />
  <Card.Body>
    <Card.Title>Mrs Joya Rahman</Card.Title>
    <Card.Text>
    Bsc (Hons), GradDipAdmin, GAICD <br /> Non-Executive Director, <br/>Chair of the Remuneration and Nominations Committee
    </Card.Text>
  </Card.Body>
</Card>
            {/* single-card */}
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://i.ibb.co/0hNs7Pq/chang.png/100px180" />
  <Card.Body>
    <Card.Title>Mr Mahbubul Siddiqui</Card.Title>
    <Card.Text>
    BA (Hons), MAICD <br /> Managing Director
    </Card.Text>
  </Card.Body>
</Card>
  </div>
 </div>
    );
};

export default AboutUs;
