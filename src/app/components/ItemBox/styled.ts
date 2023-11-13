import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const ItemBoxPaper = styled(Paper)`
  width: 200px;
  height: 310px;
  margin: 0;
  margin: 15px;
`;

export const ItemBoxContainer = styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   height: 100%;
`;

export const ItemBoxText = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MyBoxClass = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; 
`
export const PriceItem = styled(Box)`
  width: 60px;
  height: 25px;
  background-color: black;
  border-radius: 15px;
`