  
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import YTPlayer from "react-player";
import { Card, Button } from 'react-bootstrap'
import "./Description.css"

const Description = () => {
  const { description, video } = useParams();
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  console.log(video);
  return (

<div className="container">
    <Card style={{ width: '640px', margin:"200px auto" }}>
  <YTPlayer  url={`https://www.youtube.com/embed/${video}`}   />
  <Card.Body>
    <Card.Title className="title">Movie description</Card.Title>
    <Card.Text className="text">
    {description}
    </Card.Text>
    <Button onClick={handleClick}>GO BACK</Button>
  </Card.Body>
</Card>
</div>
  );
};

export default Description;