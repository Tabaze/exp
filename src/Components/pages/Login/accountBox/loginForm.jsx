import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  IconsContainer,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import Icon from "./Icon";
import { FaFacebook ,FaGoogle} from "react-icons/fa";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const FacebookBackground ="linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const googlebackground="linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email or Username" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <hr/>
      <MutedLink >Signin with</MutedLink>
      <IconsContainer >
        <Icon color={FacebookBackground}>
          <FaFacebook />
        </Icon>
        <Icon color={googlebackground}>
          <FaGoogle />
        </Icon>
        </IconsContainer>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
