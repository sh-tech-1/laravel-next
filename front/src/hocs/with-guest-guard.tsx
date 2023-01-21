import { GuestGuard } from '../components/authentication/guest-guard';

import type { FC } from 'react';

/**
 * @deprecated Use the layout strategy
 * @param Component
 */
export const withGuestGuard = (Component: FC) => (props: any) => (
  <GuestGuard>
    <Component {...props} />
  </GuestGuard>
);
