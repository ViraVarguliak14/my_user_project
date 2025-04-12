import styled from "@emotion/styled";

export const SpinnerComponent = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: rgb(53, 12, 231);
  animation: spin 0.8s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
