import { Button } from "../../common/Button/styles";
import { Container } from "../../common/Container/styles";
import { Link } from "react-router-dom";

import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from "./styles";

interface InfoSectionProps {
  primary?: boolean,
  lightBg?: boolean,
  topLine?: string,
  lightTopLine?: boolean,
  lightText?: boolean,
  lightTextDesc?: boolean,
  headline?: string,
  description?: string,
  buttonLabel?: string,
  img?: string,
  alt?: string,
  imgStart?: string,
  start?: string;
};

 export const InfoSection = ({ 
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}: InfoSectionProps) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='/sign-up'>
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>
                            </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
};