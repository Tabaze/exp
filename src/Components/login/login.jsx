import styled from "styled-components";
import React from "react";
import Icon from "./Icon";
import { FaFacebook, FaInstagram, FaTwitter ,FaGoogle} from "react-icons/fa";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    const googlebackground="linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
         
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn-log">
            Login
          </button>
        </div>
        <ForgotPassword>remember me <input type ="checkbox" name="remember me" /> </ForgotPassword>
       
        <ForgotPassword>Forgot Password ?</ForgotPassword>
        <HorizontalRule />
        <LoginWith>OR LOGIN WITH</LoginWith>
      
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebook />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
        <Icon color={googlebackground}>
          <FaGoogle />
        </Icon>
      </IconsContainer>
      </div>
    );
  }
}

const LoginWith = styled.h5`
text-transform: uppercase;
  letter-spacing: 0.2rem;
  size: 20px;
  height: 3rem;
   width: 100%;
   color:#143c16 ;
  
  padding-bottom:0;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.1rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #143c16 0%, #0af030 79%);
  background-color: #ebd0d0;
  margin:  0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`

  display: flex;
  justify-content: space-evenly;
  margin:-100;
  width: 80%;
`;

const ForgotPassword = styled.h5`


   color:#143c16 ;
  cursor: pointer;
  &:hover{
    color:white;
    background-color: #00b712;
    background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);
  }
`;
