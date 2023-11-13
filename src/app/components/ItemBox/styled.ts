import { Box, Paper, Typography, Button } from "@mui/material";
import styled from "styled-components";

export const ItemBoxPaper = styled(Paper)`
  width: 220px;
  height: 350px;
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
  justify-content: space-between;
  margin-top: 15px;
`
export const PriceItem = styled(Button)`
  width: 80px;
  height: 30px;
  font-weight: 600;
  background-color: black;
  pointer-events: none;
  font-size: 12px;
`

export const TypographyName = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
`;

export const TypographyDescripiton = styled(Typography)`
  font-weight: 300;
  line-height: 17px;
  color: #2c2c2c;
  font-size: 14px;
  text-align: center;
`;