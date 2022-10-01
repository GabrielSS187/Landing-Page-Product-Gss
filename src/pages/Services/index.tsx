import { InfoSection } from "../../shared/components/InfoSection";
import { Pricing } from "../../shared/components/Pricing";
import { homeObjOne, homeObjThree } from "./data";

export const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
};