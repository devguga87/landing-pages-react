import {
  mapSectionContent,
  mapSectionGrid,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '602fdf2d540c00269e056178',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617b',
        name: 'contact',
        section_id: 'contact',
        __v: 0,
        id: '602fdf2d540c00269e05617b',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056178',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content with no data', () => {
    const section = mapSectionContent();
    expect(section.component).toBe('');
    expect(section.title).toBe('');
    expect(section.html).toBe('');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('should map section content', () => {
    const section = mapSectionContent({
      __component: 'section.section-content',
      _id: '602fdf2d540c00269e056173',
      title: 'news coverage and some surprises',
      content: '<p>a</p>',
      metadata: {
        background: false,
        _id: '602fdf2d540c00269e05617a',
        name: 'intro',
        section_id: 'intro',
        __v: 0,
        id: '602fdf2d540c00269e05617a',
      },
      __v: 1,
      id: '602fdf2d540c00269e056173',
    });
    expect(section.component).toBe('section.section-content');
    expect(section.title).toBe('news coverage and some surprises');
    expect(section.html).toBe('<p>a</p>');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('intro');
  });

  it('should map section grid text with no data ', () => {
    const section = mapTextGrid();
    expect(section.component).toBe('');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.grid).toEqual([]);
  });

  it('should map section grid text with data ', () => {
    const section = mapTextGrid({
      __component: 'section.section-grid',
      description: 'Debitis',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'lorem',
        },
        {
          title: 'Teste 2',
          description: 'lorem',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(section.component).toBe('section.section-grid');
    expect(section.background).toBe(true);
    expect(section.sectionId).toBe('grid-one');
    expect(section.title).toBe('My Grid');
    expect(section.description).toBe('Debitis');
    expect(section.grid).toEqual([
      {
        title: 'Teste 1',
        description: 'lorem',
      },
      {
        title: 'Teste 2',
        description: 'lorem',
      },
    ]);
  });
});

/*
GridText.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};

{
        "__component": "section.section-grid",
        "_id": "602fdf2d540c00269e056174",
        "description": "Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut",
        "title": "My Grid",
        "text_grid": [
          {
            "_id": "602fdf2d540c00269e05617c",
            "title": "Teste 1",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
            "__v": 0,
            "id": "602fdf2d540c00269e05617c"
          },
          {
            "_id": "602fdf2d540c00269e05617d",
            "title": "Teste 2",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
            "__v": 0,
            "id": "602fdf2d540c00269e05617d"
          },
          {
            "_id": "602fdf2d540c00269e05617e",
            "title": "Teste 3",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
            "__v": 0,
            "id": "602fdf2d540c00269e05617e"
          }
        ],
        "image_grid": [

        ],
        "metadata": {
          "background": true,
          "_id": "602fdf2e540c00269e056199",
          "name": "grid-one",
          "section_id": "grid-one",
          "__v": 0,
          "id": "602fdf2e540c00269e056199"
        },
        "__v": 2,
        "id": "602fdf2d540c00269e056174"
      }
*/
