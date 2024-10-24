import Navbarr from "./Navbarr";

import Col from "react-bootstrap/Col";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from "react-bootstrap";

function About() {
  return (
    <div>
      <Navbarr></Navbarr>

      <img
        src="https://marketplace.canva.com/EAFRtJFCM0U/2/0/1600w/canva-brown-and-white-modern-minimalist-brand-guideline-fashion-presentation-pdhqgZv7OAo.jpg"
        style={{ width: "100%", height: "500px" }}
      ></img>

      <h1 style={{ textAlign: "center", margin: "40px" }}>OUR SERVICES</h1>
    <Container>
   <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/thumbs-up-plain-sticker-with-white-background_1059430-15765.jpg"/>
        <Card.Body>
          <Card.Title>Best Quality</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbGMONBsVZ2SZMVeAwJwusFMGe2N9x2vAoQ&s" />
        <Card.Body>
          <Card.Title>Return-Policy</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images-cdn.ubuy.co.in/633e0bd97dd2163b195999d7-windfall-repair-patches-self-adhesive.jpg" />
        <Card.Body>
          <Card.Title>Best Fabric</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Container> 
  





      <div style={{ margin: "100px" }}>
        <footer class="footer">
          <div class="container container-fluid">
            <div class="row footer__links">
              <div class="col footer__col">
                <div class="footer__title">ONLINE SHOPPING</div>
                <ul class="footer__items clean-list">
                  <li class="footer__item">
                    <p>Men's</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">Women's</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">Kids</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">Beauty</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">Home & Living</p>
                  </li>
                </ul>
              </div>
              <div class="col footer__col">
                <div class="footer__title">CUSTOMER POLICIES</div>
                <ul class="footer__items clean-list">
                  <li class="footer__item">
                    <p class="footer__link-item">Contact-Us</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">FAQ</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">Contact-Us</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">Shipping</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">Cancellation</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">Return Policy</p>
                  </li>
                </ul>
              </div>
              <div class="col footer__col">
                <div class="footer__title">MORE</div>
                <ul class="footer__items clean-list">
                  <li class="footer__item">
                    <p class="footer__link-item">Grevience Officer</p>
                  </li>
                  <li class="footer__item">
                    <p class="footer__link-item">Privacy</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer__bottom text--center">
              <div
                class="footer__copyright"
                style={{ textAlign: "center", marginTop: "60px" }}
              >
                Copyright © 2024 React Bootstrap. Built with Docusaurus.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default About;
