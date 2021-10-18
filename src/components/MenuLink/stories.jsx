import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Link',
    link: 'https://www.google.com',
  },
  argTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
  },
};

export const Template = args => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
