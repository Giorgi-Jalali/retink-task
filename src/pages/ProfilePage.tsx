import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ProfilePage() {
  return (
    <ProfileContainer>
      <div>This is your profile page</div>
      <Link to="/">
        <Homepage>back to Homepage</Homepage>
      </Link>
      <Link to="/signUp">
        <Homepage>back to Log In / Sign Up page</Homepage>
      </Link>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.form`
  background: #5f0c78;
  color: white;
  width: 90vw;
  max-width: 400px;
  height: 400px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  margin: 30px auto;
`;

const Homepage = styled.div`
  color: #c095c2;
  font-size: 14px;
  margin-top: 100px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: white;
    scale: 1.2;
  }
`;
