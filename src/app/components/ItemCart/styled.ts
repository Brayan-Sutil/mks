import { Paper, Typography } from "@mui/material";
import styled from 'styled-components';

export const PaperStyled = styled(Paper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100px;
  padding: 0 15px;
`;

export const NameItem = styled(Typography)`
    width: 100px;
`

export const ValueItem = styled(Typography)`
    font-weight: bold;
    font-size: 18px;
`