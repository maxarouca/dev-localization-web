import styled from 'styled-components';

export const Item = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }

  .user-info {
    margin-left: 10px;

    strong {
      display: block;
      font-size: 16px;
      color: #0382ee;
    }
    span {
      font-size: 13px;
      color: #0382ee;
      margin-top: 2px;
    }
  }

  p {
    color: #04192a;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0px;
  }

  a {
    color: #776ab7;
    font-size: 14px;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
    color: #6356a3;
  }
`;
