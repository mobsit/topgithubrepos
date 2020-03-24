import React from 'react';
import getCreatedAt from '../utils/getCreatedAt';

const RepoItem = ({ repo }) => {
  return (
    <div className='item'>
      <div className='image'>
        <img src={repo.owner.avatar_url} />
      </div>

      <div className='content'>
        <a className='header'>{repo.name}</a>
        <div className='meta'>
          <span className='cinema'>{repo.description}</span>
        </div>
        <div className='description'>
          <p></p>
        </div>
        <div className='extra'>
          <div className='ui label'>Stars:{repo.stargazers_count}</div>
          <div className='ui label'>Issues:{repo.open_issues_count}</div>
          <span>
            {`Submitted ${getCreatedAt(repo.created_at.split('T')[0])} by ${
              repo.owner.login
            }`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
