import styled from "styled-components";

import retinkVideo from "../assets/video/retink-content.mp4";

export default function Video() {
  return (
    <VideoContainer>
      <VideoTitle>EXPLAINER VIDEO</VideoTitle>
      <VideoDiv controls>
        <source src={retinkVideo} type="video/mp4"></source>
      </VideoDiv>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  @media (min-width: 1440px) {
    margin: -200px 0 68px 0;
  }
`;

const VideoTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 170%;
  color: #7e1cfe;
  text-align: center;
  @media (min-width: 1440px) {
    font-size: 28px;
    margin-bottom: 92px;
  }
`;

const VideoDiv = styled.video`
  width: 360px;
  height: 200px;
  border-radius: 6px;
  @media (min-width: 1440px) {
    width: 737px;
    height: 415px;
  }
`;
