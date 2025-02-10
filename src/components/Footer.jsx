import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`

  a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      color: #007bff;
    }
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2024 Admin Store. Todos os direitos reservados.</p>
            <SocialLinks>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </SocialLinks>
        </FooterContainer>
    );
};

export default Footer;