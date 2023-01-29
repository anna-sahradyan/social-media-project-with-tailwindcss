import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.4),
  rgba(255, 255, 255, 0.5)), url(/image/posts4.jpg);
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;

`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;

`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;

`;
export const Agreement = styled.span`
  font-size: 13px;
  margin: 20px 0;
  font-weight: bold;


`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 5px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
`;
export const Link = styled.a`
  width: 40%;
  padding: 5px 20px;
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  color: white;
  background-color: teal;
  font-weight: 500;
  margin-left: 90px;
  text-align: center;
  border-radius: 5px;

`;