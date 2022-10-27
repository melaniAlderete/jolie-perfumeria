import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./Footer.css";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center  text-white "
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="#52528C"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="#52528C"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="#52528C"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        © 2022 Copyright:
        <a className="text-dark"> Jolie Perfumería</a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
