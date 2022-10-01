import { InfoSection } from "../../shared/components/InfoSection";
import { Pricing } from "../../shared/components/Pricing";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from "./data";

export const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    );
};