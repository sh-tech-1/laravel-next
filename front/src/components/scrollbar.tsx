import 'simplebar/dist/simplebar.min.css';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';
import SimpleBar from 'simplebar-react';

import type { Theme } from '@mui/material';
import type { SxProps } from '@mui/system';
import type { MutableRefObject } from 'react';

interface ScrollbarProps extends SimpleBar.Props {
  ref: MutableRefObject<SimpleBar>;
  sx?: SxProps<Theme>;
}

const ScrollbarRoot = styled(SimpleBar)``;

export const Scrollbar = forwardRef<MutableRefObject<SimpleBar>, ScrollbarProps>((props, ref) => (
    <ScrollbarRoot
      // @ts-ignore
      ref={ref}
      {...props}
    />
  ));
