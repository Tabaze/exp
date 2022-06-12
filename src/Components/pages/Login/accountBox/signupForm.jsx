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
import Axios from 'axios'

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [con,setCon]=useState('');
  const submitReview=()=>{
    Axios.post('http://localhost:3001/api/AddUser',{
      name:username,
      email:email,
      pasword:pass
    }).then((response)=>{
      if(response.data==null)
      alert('email or password wrong')
      else
      { 
        if(response==true){
        sessionStorage.setItem("pass",true);
        window.location = '/';
        }
      } 
    })
  }
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
          if(pass!==con)alert("Must be the same password")
          else submitReview();
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
