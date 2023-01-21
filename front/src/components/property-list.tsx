import { List } from '@mui/material';
import PropTypes from 'prop-types';

import type { FC, ReactNode } from 'react';

interface PropertyListProps {
  children: ReactNode;
}

export const PropertyList: FC<PropertyListProps> = (props) => {
  const { children } = props;

  return (
    <List disablePadding>
      {children}
    </List>
  );
};

PropertyList.propTypes = {
  children: PropTypes.node
};
