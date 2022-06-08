import React, { useContext,useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [con,setCon]=useState('');
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" onChange={(e)=>{
          setUsername(e.target.value)
        }} />
        <Input type="email" placeholder="Email" onChange={(e)=>{
          setEmail(e.target.value)
        }} />
        <Input type="password" placeholder="Password" onChange={(e)=>{
          setPass(e.target.value)
        }} />
        <Input type="password" placeholder="Confirm Password" onChange={(e)=>{
          setCon(e.target.value)
        }} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={()=>{
          console.log(username)
          console.log(email)
          console.log(pass)
          console.log(con)
          if(pass!==con)alert("Must be the same password")
          else console.log("done")
      }}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
