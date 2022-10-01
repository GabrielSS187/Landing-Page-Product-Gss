import { InfoSection } from "../../shared/components/InfoSection";
import { homeObjOne, homeObjTwo } from "./data";

export const Products = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
};