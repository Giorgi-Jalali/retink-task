import styled from "styled-components";



const NotifyMeButton = styled.input`
  background: #7e1cfe;
  color: #ffffff;
  width: 60%;
  font-weight: 500;
  font-size: 16px;
  line-height: 170%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 12px 30px;
  margin: 25px 0;
  cursor: pointer;
  border: none;
  transition: 0.5s;
  &:hover {
    background: #f5d0f0;
    color: #7e1cfe;
  }
  @media (min-width: 1440px) {
    width: 30%;
    font-size: 20px;
  }
`;

export { NotifyMeButton };