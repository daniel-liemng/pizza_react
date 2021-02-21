import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Facebook'
                rel='noopener noreferer'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Instagram'
                rel='noopener noreferer'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferer'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Linkedin'
                rel='noopener noreferer'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
