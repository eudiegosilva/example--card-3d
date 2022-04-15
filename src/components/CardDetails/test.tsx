import { screen } from '@testing-library/react';
import { renderWithTheme } from 'helpers/tests/renderWithTheme';

import CardDetails from '.';

describe('<CardDetails />', () => {
  it('should render the CardDetails component', () => {
    renderWithTheme(<CardDetails />);

    expect(screen.getByLabelText('CardDetails component')).toBeInTheDocument();
  });
});
