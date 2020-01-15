import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  margin-left: 20px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    list-style: none;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1000px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`;
