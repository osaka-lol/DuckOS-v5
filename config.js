// NEW UPDATE: Now uses % instead of width ;) good luck lmao
const config = {
  buttons: [
    {
      id: 'rammerhead-browser',
      iframeSrc: 'https://everyone.isageek.net/',
      defaultWidth: 50,
      defaultHeight: 80,
      buttonText: 'Rammerhead',
      windowTitle: 'Rammerhead Browser',
      imgSrc: '/system/media/rammerhead_icon.png'
    },
    {
      id: 'meowzies-adventure',
      iframeSrc: '/apps/meowiegames/meowziesadventurethree/index.html',
      defaultWidth: 30,
      defaultHeight: 45,
      buttonText: 'Meowzies Adventure 3',
      windowTitle: 'Meowzies Adventure 3',
      imgSrc: '/apps/meowiegames/meowziesadventurethree/icon.png',
      onStart: false
    },
    {
      id: 'about',
      iframeSrc: '/apps/about/index.html',
      defaultWidth: 90,
      defaultHeight: 80,
      buttonText: 'About Page',
      windowTitle: 'Learn about DuckOS!',
      imgSrc: '/system/media/bloxd_icon.png'
    }
  ]
};
config.buttons.forEach(buttonConfig => {
  const $button = createButton(buttonConfig);
  $('#apps').append($button);
});
