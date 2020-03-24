const getCreatedAt = createdDate => {
  const now = Date.parse(new Date().toJSON(new Date()).split('T')[0]);

  const createAt = Date.parse(createdDate);

  const timeDifference = now - createAt;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return 'today';
  } else if (daysDifference === 1) {
    return '1 day ago';
  } else {
    return `${daysDifference} days ago`;
  }
};

export default getCreatedAt;
