import { ContainerProps } from './presenter';
import HeaderTitlePresentational from './presenter';

const HeaderTitleContainer: React.FC<ContainerProps> = (props) => {
  return (
    <HeaderTitlePresentational
      {...props}
      title="都道府県別の総人口推移グラフ"
    />
  );
};

export default HeaderTitleContainer;
