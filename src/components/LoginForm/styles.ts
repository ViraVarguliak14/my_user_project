import styled from "@emotion/styled";


export const LoginFormComponent = styled.form`
display: flex;
  flex-direction: column;
  gap: 20px; 
  min-width: 400px; 
  padding: 40px;
  background-color: white;
  border: 2px solid #dcdcdc; 
  border-radius: 10px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px; 
  margin: 0 auto; 
  transition: all 0.3s ease; 
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); 
  }
`;

export const Title = styled.div`
  align-self: center;
  font-size: 28px; 
  font-weight: 700;
  color: #38121f;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center; 
`;


export const SubmitError = styled.div`
  color: red;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;