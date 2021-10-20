import { NavLinks } from '.';
import links from './mock';

export default {
  title: 'Main menu',
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = args => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
