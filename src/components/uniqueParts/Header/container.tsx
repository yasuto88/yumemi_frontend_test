import { ContainerProps } from './presenter';
import HeaderPresentational from './presenter';

const HeaderContainer: React.FC<ContainerProps> = (props) => {
  return <HeaderPresentational {...props} />;
};

export default HeaderContainer;
