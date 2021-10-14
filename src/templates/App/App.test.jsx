import { screen } from '@testing-library/dom';
import Home from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../utils/render-theme';

describe('<Home/>', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
