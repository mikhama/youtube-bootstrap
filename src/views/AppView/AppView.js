export default class AppView {
  constructor(clips) {
    this.clips = clips;
  }

  render() {
    const content = document.createElement('ul');
    content.innerHTML = this.clips.map(title => `<li>${title}</li>`).join('');

    document.body.appendChild(content);
  }
}
