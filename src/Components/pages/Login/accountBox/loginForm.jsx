import React, { useContext,useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  IconsContainer,
} from "./common";
import Cookies from 'universal-cookie';
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import Icon from "./Icon";
import { FaFacebook ,FaGoogle} from "react-icons/fa";
import Axios from 'axios'

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const FacebookBackground ="linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const googlebackground="linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";

const cookies = new Cookies();
const saveCookies=(em)=>{
  cookies.set('user-email', em, { path: '/' });
}

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const SessionDataStorage = () => {
    sessionStorage.setItem("pass",true);
    console.log();
  };
  const submitReview=()=>{
    Axios.get('http://localhost:3001/api/GetUser',{
      email:email,
      pasword:pwd
    }).then((response)=>{
      if(response.data==null)
      alert('email or password wrong')
      else
      { 
        SessionDataStorage();
        saveCookies(email)
        window.location = '/';
      } 
    })
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email or Username" onChange={(e)=>{
          setEmail(e.target.value);
        }} />
        <Input type="password" placeholder="Password" onChange={(e)=>{
          setPwd(e.target.value);
        }} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <hr/>
      <MutedLink >Sign in with</MutedLink>
      <IconsContainer >
        <Icon color={FacebookBackground}>
          <FaFacebook />
        </Icon>
        <Icon color={googlebackground}>
          <FaGoogle />
        </Icon>
        </IconsContainer>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={submitReview}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}