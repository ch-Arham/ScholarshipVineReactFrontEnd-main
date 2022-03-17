import React from "react";
import { Card, Button } from "react-bootstrap";
// import ScrollToTop from "react-scroll-to-top";
// import Link from 'react-router-dom';
// import IndividualDetail from "./IndividualDetail";

const ScholarshipCard = ({ data }) => {

  return (
    <>
    {/* <ScrollToTop smooth /> */}
      <Card className="shadow border" style={{cursor:'pointer'}}>
        <Card.Header style={{fontWeight: 'bolder', color: 'black'}}>{data.pubDate}</Card.Header>
        <Card.Body>
          <Card.Title className="p-1" style={{marginLeft: '-8px', color: 'black'}}>{data.title}</Card.Title>
          <Card.Text style={{color: 'black'}}>
            <span style={{fontWeight: 'bolder'}}>Category:</span> {data.category}
          </Card.Text>
          <Card.Text style={{color: 'black'}}>
            <span style={{fontWeight: 'bolder'}}>Description:</span> {data.description.b}
          </Card.Text>
          <Button variant="primary" href={data.link} target='_blank'>More Detail</Button>
          {/* <IndividualDetail  finalData={data[['content:encoded']]} /> */}
        </Card.Body>
      </Card>
      <div style={{border: '1px solid rgba(45,45,45,0.2)', marginBottom: '1.5em', width: '80%', marginLeft: 'auto', marginRight:'auto'}}  />
    </>
  );
};

export default ScholarshipCard;
