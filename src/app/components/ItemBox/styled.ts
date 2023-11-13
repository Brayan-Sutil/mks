import { Box, Button, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const ItemBoxPaper = styled(Paper)`
  width: 250px;
  height: 400px;
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
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  margin-bottom: 10px;
`;

export const MyBoxClass = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px; 
  margin-top: 10px;
`
export const PriceItem = styled(Button)`
  width: 80px;
  height: 35px;
  background-color: black;
  font-size: 14px;
  font-weight: bold;
`

export const NameItem = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  color: black;
  width: 150px;
`;

export const DescriptionItem = styled(Typography)`
  font-size: 14px !important;
  text-align: center;
  height: 110px;
  margin: 15px 0 !important;
`;

