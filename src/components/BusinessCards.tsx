import styled from "styled-components";

import screenLogo from "../assets/images/screen-logo.png";
import laptopCoffee from "../assets/images/laptop-coffee.png";
import laptopScreen from "../assets/images/laptop-screen.png";
import cameraLens from "../assets/images/camera-lens.png";
import oldPrinter from "../assets/images/old-printer.png";
import mobile from "../assets/images/mobile.png";

export default function BusinessCards() {
  return (
    <Container>
      <RetinkText>
        <h3>Transform your Creation Process</h3>
        <p>
          With a new approach toordering content, you can now stop juggling
          multiple documents and meetings and start publishing content faster
          and on demand
        </p>
      </RetinkText>
      <RetinkText>
        <h3>Activate your business growth with RetinkContent. </h3>
        <p>
          Save time and maintain your brand identity within your budget range or
          sign up for affordable plans and still access multiple content
          services like:
        </p>
      </RetinkText>
      <ImageCards>
        <FirstRow>
          <ImageCard>
            <ScreenLogo />
            <h5>Logos</h5>
            <Line />
            <p>
              {" "}
              Have a unique & creative logo designed to express and represent
              your brand identity.
            </p>
          </ImageCard>
          <ImageCard>
            <LaptopCoffee />
            <h5>Blog Writing</h5>
            <Line />
            <p>
              Write SEO enriched blog posts as long or short articles on any
              topic of your choice .
            </p>
          </ImageCard>
          <ImageCard>
            <LaptopScreen />
            <h5>Animated Videos</h5>
            <Line />
          </ImageCard>
        </FirstRow>
        <SecondRow>
          <ImageCard>
            <CameraLens />
            <h5>Product Demo</h5>
            <Line />
            <p>
              Introduce your product to potential customers in a clear and
              creative video.
            </p>
          </ImageCard>
          <ImageCard>
            <OldPrinter />
            <h5>Copywriting</h5>
            <Line />
            <p>
              Have creative and compelling copies written to boost your product,
              brand, service or company.
            </p>
          </ImageCard>
          <ImageCard>
            <Mobile />
            <h5>Social Media Ads</h5>
            <Line />
            <p>Boost sales and awareness with tailor made ads from experts.</p>
          </ImageCard>
        </SecondRow>
      </ImageCards>
    </Container>
  );
}

const Container = styled.div`
  @media (min-width: 1440px) {
    margin: 0 auto;
    width: 800px;
  }
`;

const RetinkText = styled.article`
  padding: 0 20px;

  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    text-align: center;
    color: #7e1cfe;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #4d4d4d;
    margin-bottom: 30px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 84px;
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 20px;
      line-height: 34px;
    }
  }
`;

const FirstRow = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 21px;
  }
`;
const SecondRow = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 21px;
    margin-top: 21px;
  }
`;

const ImageCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  h5 {
    margin-top: 15px;
  }

  p {
    text-align: center;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;

    h5 {
      font-weight: 300;
      font-size: 18px;
      line-height: 170%;
      color: #393939;
    }

    p {
      text-align: start;
      font-size: 15px;
      line-height: 170%;
    }
  }
`;

const ImageStyles = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 253px;
  height: 143px;
  border-radius: 20px;
  background-position: center;
`;

const ScreenLogo = styled(ImageStyles)`
  background: url(${screenLogo});
  background-position: 50% 30%;
`;

const LaptopCoffee = styled(ImageStyles)`
  background: url(${laptopCoffee});
`;

const LaptopScreen = styled(ImageStyles)`
  background: url(${laptopScreen});
  background-position: 50% 30%;
`;

const CameraLens = styled(ImageStyles)`
  background: url(${cameraLens});
  background-position: 50% 30%;
`;

const OldPrinter = styled(ImageStyles)`
  background: url(${oldPrinter});
`;

const Mobile = styled(ImageStyles)`
  background: url(${mobile});
`;

const Line = styled.div`
  width: 80px;
  height: 3px;
  background-color: rgba(117, 77, 232, 1);
  margin: 10px 0 20px 0;
`;
