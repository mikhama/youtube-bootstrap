import AppModel from './AppModel';

describe('AppModel.extractClipNames', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractClipNames).toBeInstanceOf(Function);
  });

  it('Should return array of string that contains clip titles', () => {
    const data = {
      items: [
        {
          snippet: {
            title: 'title 1',
          },
        },
        {
          snippet: {
            title: 'title 2',
          },
        },
        {
          snippet: {
            title: 'Super title 3',
          },
        },
      ],
    };

    const result = AppModel.extractClipNames(data);

    expect(result).toEqual(['title 1', 'title 2', 'Super title 3']);
  });
});
