export const mapSections = (sections = []) => {
  return sections.map(section => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image: { url: srcImg = '' } = '',
  } = section;

  return {
    component,
    title,
    text,
    background,
    sectionId,
    srcImg,
  };
};

export const mapSectionGrid = section => {
  return section;
};

export const mapSectionContent = section => {
  return section;
};
