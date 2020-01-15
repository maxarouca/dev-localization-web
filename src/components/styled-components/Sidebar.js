import styled from 'styled-components';

export const Sidebar = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 30px 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #04192a;
  }

  form {
    margin-top: 30px;
  }

  .input-block + .input-block {
    margin-top: 20px;
  }

  .input-group {
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  .input-group .input-block {
    margin-top: 0;
  }

  .input-block label {
    color: #0382ee;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  .input-block input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #04192a;
    border: 0;
    border-bottom: 1px solid #dedfda;
  }

  button {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background-color: #0382ee;
    border-radius: 2px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background-color: #0071ce;
  }
`;
