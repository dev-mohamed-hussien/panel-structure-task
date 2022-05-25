import React, { useState } from "react";
import Modal from "./../../components/Modal/Modal";
import styled from "styled-components";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: #000;
  border: 2px solid #000;
  cursor: pointer;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;
export default function Home() {
  const [show, setShow] = useState(false);
  React.useEffect(() => {
    console.log("render");
  });
  return (
    <div className="App">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Order</div>
            <div className="number">40,876</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt" />
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bx-cart-alt cart" />
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Sales</div>
            <div className="number">38,876</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt" />
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bxs-cart-add cart two" />
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Profit</div>
            <div className="number">$12,876</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt" />
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bx-cart cart three" />
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Return</div>
            <div className="number">11,086</div>
            <div className="indicator">
              <i className="bx bx-down-arrow-alt down" />
              <span className="text">Down From Today</span>
            </div>
          </div>
          <i className="bx bxs-cart-download cart four" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={() => setShow(true)}>Open Modal</Button>
      </div>
      <Modal show={show} onClose={() => setShow(false)}>
        <div className="content">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132__340.jpg"
            alt="Developer"
          />
          <div className="text">
            <h2>John Doe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
