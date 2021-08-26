import Loader from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

const ContactLoader = () => (
  <LoaderWrapper>
    <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
  </LoaderWrapper>
  
);

export default ContactLoader;
