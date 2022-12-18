import * as S from './styles';

const Main = ({
                description = 'React SSR boilerplate made on top of NextJS with the power of Typescript, Styled Components, Jest, Testing Library and infinite possibilities.',
                vitalLinkText = 'Get vital check',
                linkText = 'Get started',
              }) => (
  <S.Wrapper>
    <S.Logo
      src="/images/logo.svg"
      alt="Welcome"
    />
    <S.Description>{description}</S.Description>

    <S.Link href="/vital">
      {vitalLinkText}
    </S.Link>
    <S.Link href="https://github.com/skeletonking1/aphrodite">
      {linkText}
    </S.Link>
  </S.Wrapper>
);

export default Main;
