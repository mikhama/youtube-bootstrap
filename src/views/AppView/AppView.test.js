import AppView from './AppView';

describe('AppView.render', () => {
  it('Should be an instance of Function', () => {
    expect(AppView.prototype.render).toBeInstanceOf(Function);
  });

  it('Should render correctly', () => {
    const context = {
      clips: [
        'Video about JS',
        'Another video about JS',
        'Undefined video',
      ],
    };

    AppView.prototype.render.call(context);

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
