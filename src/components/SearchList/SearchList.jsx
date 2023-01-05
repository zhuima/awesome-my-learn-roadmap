import React from 'react';
import Card from '@/components/Card/Card';

function SearchList({ filteredPosts }) {
  const filtered = filteredPosts.map((post, index) => (
    <Card key={index} post={post} />
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
