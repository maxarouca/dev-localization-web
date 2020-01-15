import React from 'react';

import { Item } from './styles';

export default function DevItem({ dev }) {
  return (
    <Item>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`} target="blank">
        Acessar perfil no github
      </a>
    </Item>
  );
}
