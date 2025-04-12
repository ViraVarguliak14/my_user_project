import styled from "@emotion/styled";

interface MainButtonStyledProps {
  danger?: boolean
}

export const MainButton = styled.button<MainButtonStyledProps>`
  padding: 12px;
  background-color: #d4165a; 
  border: none;
  border-radius: 8px; 
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e80065; 
    transform: scale(1.05); 
  }
  &:disabled {
    background-color: #cccccc; 
    cursor: not-allowed;
  }
`;