import { useTitle } from './hooks';
import { ContainerProps } from './presenter';
import HeaderTitlePresentational from './presenter';

const getTitle = async () => {
  // 仮のタイトル取得関数
  return new Promise<string>((resolve) =>
    setTimeout(() => resolve('取得したタイトル'), 0),
  );
};

const HeaderTitleContainer: React.FC<ContainerProps> = (props) => {
  // TODO: 仮のタイトル取得関数を実際の関数に差し替える
  const title = useTitle(getTitle);
  return <HeaderTitlePresentational {...props} title={title} />;
};

export default HeaderTitleContainer;
