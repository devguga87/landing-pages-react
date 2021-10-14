import { screen } from '@testing-library/dom';
import Home from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../utils/render-theme';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });

  expect(headingContainer).toMatchSnapshot();

  expect(headingContainer).toHaveStyleRule('background', 'blue');
});
