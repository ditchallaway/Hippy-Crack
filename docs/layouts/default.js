const html = require('html-template-tag');

module.exports = ({ title, content, head }) => html`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    $${head}
    $${title ? html`<title>${title}</title>` : ''}
    <script>
      const registerSW = async () => {
        if (!navigator.serviceWorker) {
          return;
        }

        const reg = await navigator.serviceWorker.register('/sw.js');

        await reg.update();
      }

      registerSW();
    </script>
  </head>
  <body>
    <nav>
      <p class="float-ballon"><a href="/">🎈</a></p>
    </nav>
    <main class="container">
      $${content}
    </main>
  </body>
  <hr style="margin-top: 40px;">
  <footer style="display: flex; justify-content: space-between;">
    <div id="theme-toggle" style="position: fixed; bottom: 20px; right: 30px; font-size: 30px;">
      🌞
    </div>
    <p>
      Made with Hydrogen by <a style="color: #007acc;" href="https://twitter.com/shailen_naidoo">@shailen_naidoo</a> ❤️
    </p>
    <a href="https://www.netlify.com">
      <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"/>
    </a>
  </footer>
  </html>
`;
