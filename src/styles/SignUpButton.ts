
import styled from "styled-components";

const SignUpButton = styled.div`
  width: 260px;
  color: rgba(117, 77, 232, 1);
  border: 2px solid #754de8;
  border-radius: 20px;
  text-decoration: underline;
  padding: 12px 15px;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: rgba(117, 77, 232, 1);
    color: white;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export { SignUpButton };