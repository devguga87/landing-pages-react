import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid Two Column',
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quia molestias, corrupti itaque officia provident adipisci consequuntur maxime, beatae exercitationem nesciunt perspiciatis fugiat repudiandae eum eveniet? Dolor saepe sit debitis?`,
    srcImg: 'assets/images/javascript.svg',
  },
};

export const Template = args => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
