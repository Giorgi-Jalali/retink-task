import styled from "styled-components";

import AI from "../assets/icons/AI.svg";
import docs from "../assets/icons/Groupbrandidentity.svg";
import inform from "../assets/icons/inform.svg";
import customer from "../assets/icons/direct-customer.svg";
import publish from "../assets/icons/publish.svg";

export default function Cards() {
  return (
    <CardContainer>
      <ThreeCard>
        <Card>
          <ImageAI />
          <h4>MakeAI-assisted Content Choices</h4>
          <p>
            Access and Order from an extensive catalogue in any language and on
            your budget’s terms. If unsure, our AI guides you to the best.
          </p>
        </Card>
        <Card>
          <Docs />
          <h4>Upload and Maintain your Brand Identity</h4>
          <p>
            Add your preferences and brand assets to ensure the contents is
            consistent with your brand identity. No brand asset? We can make for
            you!
          </p>
        </Card>
        <Card>
          <Inform />
          <h4>Be informed as we create</h4>
          <p>
            Your details are translated and sent to the AI, FP, or both (per
            your choice) as you relax and receive continuous updates.
          </p>
        </Card>
      </ThreeCard>

      <LastTwo>
        <Card>
          <Customer />
          <h4>Receive and Review</h4>
          <p>
            The finished content is delivered and you can make corrections that
            we will effect to satisfy your requirements.
          </p>
        </Card>
        <Card>
          <Publish />
          <h4>Publish and Monitor your contents’ progress</h4>
          <p>
            The finished content is delivered and you can make corrections that
            we will effect to satisfy your requirements.
          </p>
        </Card>
      </LastTwo>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  @media (min-width: 1440px) {
    width: 1175px;
    height: 837px;
    gap: 50px;
    margin: 0 auto 40px auto;
  }
`;

const Card = styled.div`
  background: #ffffff;
  width: 80%;
  box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  h4 {
    text-align: center;
    margin: 15px 0;
  }

  p {
    text-align: center;
  }

  @media (min-width: 1440px) {
    width: 361px;
    height: 386px;
    padding: 65px 40px;

    h4 {
      padding: 0 45px;
    }
  }
`;

const ThreeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const LastTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const CardStyles = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
  @media (min-width: 1440px) {
    width: 70px;
    height: 70px;
  }
`;

const ImageAI = styled(CardStyles)`
  background-image: url(${AI});
`;

const Docs = styled(CardStyles)`
  background-image: url(${docs});
`;

const Inform = styled(CardStyles)`
  background-image: url(${inform});
`;

const Customer = styled(CardStyles)`
  background-image: url(${customer});
`;

const Publish = styled(CardStyles)`
  background-image: url(${publish});
`;
