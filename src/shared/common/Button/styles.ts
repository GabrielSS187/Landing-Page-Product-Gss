import styled from "styled-components";

interface Props {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
};

export const Button = styled.button<Props>`
  border-radius: 4px;
  background: ${({ primary }: Props) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }: Props) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }: Props) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }: Props) => (primary ? '#0467FB' : '#4B59F7')};
  }
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;