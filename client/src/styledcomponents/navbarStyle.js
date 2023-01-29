import styled from "styled-components";

export const Container = styled.div`
  height: 60px;

`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between


`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

`;
export const Language = styled.span`
  font-size: 14px;
  padding: 13px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: -12px;

`;
export const Right = styled.div`
  flex: 1;
  text-align: center;

`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;


`;


export const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  color: teal;
  font-weight: bold;
  //color: ${props => props.type === "filled" ? "teal" : "transparent"}


`;
export const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
 

`;
export const Button = styled.button`
  margin: 5px 0;
  font-size: 12px;
  cursor: pointer;
  border: none;
  padding: 15px 15px;
  background-color: teal;
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
  border-radius: 5px;
`;
export const Span = styled.span`
  width: 40%;
  border: none;
  padding: 15px 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 15px;
  border-radius: 5px;
`;
