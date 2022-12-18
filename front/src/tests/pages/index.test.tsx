import { render, screen } from '@testing-library/react';

import Home from '../../pages';

describe('<Home/>', () => {
  it('should render correctly', () => {
    const { container } = render(<Home />);

    expect(screen.getByRole('img', { name: /welcome/i })).toBeInTheDocument;

    expect(container.firstChild).toMatchSnapshot();
  });
});