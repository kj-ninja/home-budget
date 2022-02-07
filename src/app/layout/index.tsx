import {FC} from 'react';
import StyledLayout from "./styles";
import Nav from "../components/Nav";

interface Props {
}

const Layout: FC<Props> = () => {
  return (
    <StyledLayout>
      <Nav/>
    </StyledLayout>
  )
};

export default Layout;

