import React from 'react';

const PortfolioFilterItem = props => {
  let categories;
  
  if (props.categories.length > 0) {
    categories = props.categories.map(cat => <li key={cat.id}><a href={cat.id}>{cat.title}</a></li>)
  } else {
    categories = 'No categories';
  }

  return(
    <ul className="dropdown-menu" role="menu">
        {categories}
    </ul>
  );
}

export default PortfolioFilterItem;
