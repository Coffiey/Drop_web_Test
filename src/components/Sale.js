import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

const Sales = () => {
  return (
    <Container style={{ height: "80vh", margin: "10vh auto", width: "auto" }}>
      <video
        autoplay
        muted
        controls
        style={{ width: "39vh", height: "100%" }}
      >
        <source
          src='stock.mp4'
          type='video/mp4'
        />
      </video>
    </Container>
  );
};

export default Sales;
