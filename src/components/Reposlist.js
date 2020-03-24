import React from 'react';
import RepoItem from './RepoItem';

const Reposlist = ({ repos }) => {
  const renderedList = repos.map(repo => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  return <div className='ui divided list items '>{renderedList}</div>;
};

export default Reposlist;
