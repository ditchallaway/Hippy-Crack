![N20](https://sandpoint.properties/agents/jonny/n20.jpg)

# Docs | 🎈 Hippy Crack

 ## Code Forked from Hydrogen.js
Renamed Nitrous as the code had clearly become too heavy for an atom with just a single proton.  Later named Hippy Crack when it was discovered that the **site** and and even the **generator** were emergent properties of the state.



---

# The hippiest static-site generator you can find at a concert for $5

___

 Hippy Crack uses JavaScript as it's templating engine, it's aimed at doing one thing really well but instead SURPRIZE ATTACK! it starts converting template literals to HTML making it super extensible as you have the whole Node.js ecosystem at your fingertips. 🔊Wa-wa-wa-wa...🎈

Before ES6, JavaScript was not considered powerful enough to manipulate large chunks of the DOM and template engines like Handlebars and Pug filled that void. Now that JavaScript is more powerful than ever, it's time for JS to shine as a viable templating engine.

## Hippy Crack provides you with:

-   **⚡ Millisecond Builds.** With the global average attention span being 8 seconds, why wait seconds for your builds when you can wait milliseconds.
-   **🔥 JavaScript Templates.** With ES6 template literals, who needs template engines like pug and handlebars. You now have access to the full-power of JavaScript.
-   **🔌 Use External APIs.** Plug into your data with remote APIs.
-   **🕶 Powerful Metadata API.** Get the best SEO for your static pages.
-   **🔨 Build Hooks.** Customize the build process to fit your needs
-   🤖 Service Worker friendly.** Build powerful offline-first experiences

___

# Getting Started | 🎈 Hippy Crack

Learn how to get up and running with Hippy Crack


🔨 Getting Started

___

Hippy Crack is available on [Yarn](https://yarnpkg.com/en/package/Hippy Crack-cli) and [NPM](https://www.npmjs.com/package/Hippy Crack-cli) and requires Node.js 8 and higher. We will be using Yarn as the package manager throughout the documentation

## Step 1: Setup a project

We need a folder to store our project files

```
    
      $ mkdir Hippy Crack-sample
      $ cd Hippy Crack-sample
    
  
```

## Step 2: Install Hippy Crack

Our project needs a `_package.json_`. We can use Yarn to make one

```
    
      $ yarn init -y
    
  
```

Add Hippy Crack to the "package.json"

```
    
      $ yarn add Hippy Crack-cli
    
  
```

## Step 3: Create a template

Let's create a simple template which we will store in `index.js` file

```
    
      const page = ({ title, head, data }) => `
        <html>
          <head>
            ${head}
            <title>${title}</title>
          </head>
          <body>
            <p>${data.text}</p>
          </body>
        </html>
      `;

      module.exports = {
        title: 'Hippy Crack webpage',
        page,
        data: () => ({
          text: 'Hello from Hippy Crack',
          css: 'https://main.css',
        }),
        head: ({ data }) => [
          ['link', { rel: 'stylesheet', href: data.css }],
          ['script', { src: 'https://script.js' }, true],
          ['style', {}, 'body { font-size: 10px; }'],
        ],
      };
    
  
```

## Step 4: Build the template

We need to run the `generate` command to build the `index.js` template. The output of template will be stored in a file of the same name as the template but with the `.html` extension.

```
    
      $ npx Hippy Crack generate index.js
    
  
```
`

```index.html

    
      <html>
        <head>
          <link rel="stylesheet" href="https://main.css" />
          <script src="https://script.js"></script>
          <style>body { font-size: 10px; }</style>
          <title>Hippy Crack webpage</title>
        </head>
        <body>
          <p>Hello from Hippy Crack</p>
        </body>
      </html>
    
  
```

The _generate_ command is more of a lower-level template generator, for a more advanced setup we use the _build_ command for working with more larger projects. Find out more in the [Advanced Setup](https://Hippy Crack-js.netlify.app/docs/advanced-setup) section.




# Advanced Setup | 🎈 Hippy Crack

## Excerpt

Learn how to use a more advanced setup with Hippy Crack

---
# ⚙ Advanced Setup

___

If you have not read the guide, now would be the perfect time! The Advanced Section builds on top of what we did in the Getting Started section.

## Step 1: Setting up a layout

A `layout` is a template that contains our application shell which our `page` templates get injected into. Create a folder called "layouts", this is where our layouts will be stored.

layouts/default.js

```
    
      module.exports = ({ title, content }) => `
        <!DOCTYPE html>
        <html>
          <head>
            <title>${title}</title>
          </head>
          <body>
            ${content}
          </body>
        </html>
      `;
    
  
```

`title` is provided by the page template and `content` is the result of the generated page template. Now that we have our layout, we now need to use link it to a page template.

## Step 2: Setting up a page

A `page` is a template that contains your page content. All page templates are stored in the pages folder.

pages/index.js

```
    
      const page = ({ data }) => `
        <p>${data.text}</p>
      `;

      module.exports = {
        layout: 'default',
        title: 'Hippy Crack webpage',
        page,
        data: () => ({
          text: 'Hello from Hippy Crack 🎈',
        }),
      };
    
  
```

## Step 3: Building our templates into HTML

After setting up our pages and layouts, we are now able to generate our templates into deployable HTML files. The built files are stored in `dist`. To build your templates run the `build` command

```
    
      $ npx Hippy Crack build
       _   _           _
      | | | |_   _  __| |_ __ ___   __ _  ___ _ __  
      | |_| | | | |/ _` | '__/ _ \ / _` |/ _ \ '_ \ 
      |  _  | |_| | (_| | | | (_) | (_| |  __/ | | |
      |_| |_|\__, |\__,_|_|  \___/ \__, |\___|_| |_|
              |___/                 |___/

      MODE: PRODUCTION
      Building files... done
      Build time: 49.934ms
    
  
```

Use the `--dev` to enable builds in development mode

## Step 4: Using static assets like CSS and JS

If you have static assets like CSS, JS, Images and etc... You can create a folder called `public` in the root of the project. You can place any assets you like in this folder and when you run the `build` command the public folder is automatically hoisted into the dist folder.

Repeat Step 3 to see how it works.

## Step 5: Setting up a dev server

Most static-site generators provide a development server out of the box but not Hippy Crack. Hippy Crack gives all the power to you, so you can setup our own development server. Here is a simple development server setup with hot reloading.

We need some way to re-run Hippy Crack when files change and push the updates to the browser. We can use `nodemon` `live-server` `npm-run-all` packages

Install packages

```
    
        $ yarn add -D nodemon live-server npm-run-all
    
  
```

Update package.json

```
    
        {
          "scripts": {
            "reload": "npx cross-env npx nodemon -w ./layouts -w ./pages -w ./public --exec \"npx Hippy Crack build --dev\"",
            "serve": "npx cross-env npx live-server ./dist",
            "dev": "npx npm-run-all --parallel reload serve"
          }
        }
    
  
```

Run `yarn dev` then you will have neat little development server with hot reloading




# Working with data | 🎈 Hippy Crack

> ## Excerpt
> Learn how to expose data to your data sync/async

---
# 🌐 Working with Data

___

Hippy Crack has a powerful API for exposing data to your page templates using the data method, we can expose synchronous or asynchronous data.

Let's see how we can do this!

## Using Synchronous Data

Synchronous data is any data that does not require some sort of API call to an endpoint.

Using a simple object

```
    
      const page = ({ title, data }) => `
        <html>
          <head>
            <title>${title}</title>
          </head>
          <body>
            <p>${data.text}</p>
          </body>
        </html>
      `;

      module.exports = {
        title: 'Hippy Crack webpage',
        page,
        data: ({ dev }) => ({
          text: 'Hello from Hippy Crack',
        }),
      };
    
  
```

Using JSON data

```
    
      const data = require('./data.json');

      const page = ({ title, data }) => `
        <html>
          <head>
            <title>${title}</title>
          </head>
          <body>
            <ul>
              ${data.posts.map((post) => `<li>${post.title}</li>`).join('')}
            </ul>
          </body>
        </html>
      `;

      module.exports = {
        title: 'Hippy Crack webpage',
        page,
        data: ({ dev }) => ({
          posts: data,
        }),
      };
    
  
```

## Using Asynchronous Data

Asynchronous data is any data that is sitting in a remote API

Hitting a remote API

```
    
      const axios = require('axios');

      const page = ({ title, data }) => `
        <html>
          <head>
            <title>${title}</title>
          </head>
          <body>
            <p>${data.githubStars}</p>
          </body>
        </html>
      `;

      module.exports = {
        title: 'Hippy Crack webpage',
        page,
        data: async ({ dev }) => ({
          githubStars: await axios.get('https://githubstars.com').then((res) => res.data),
        }),
      };
    
 
```



# Working with Metadata | 🎈 Hippy Crack

> ## Excerpt
> Want to add some metadata to your page? Now you can with the Head API! All page templates have access to this API

---
# 🕶 Working with Metadata`+v0.5`

Want to add some metadata to your page? Now you can with the `Head API`! All page templates have access to this API

## Using the Head API

Using static metadata

You can access the head property in the layout template

```
    
      module.exports = ({ title, content, head, dev }) => `
        <!DOCTYPE html>
        <html>
          <head>
            ${head}
            <script src="${dev ? 'https://dev.script.js' : 'https://prod.script.js'}"></script>
            <title>${title}</title>
          </head>
          <body>
            ${content}
          </body>
        </html>
      `;
    
  
```

In your page template you can export the head function

```
    
      const page = ({ data, dev }) => `
        <p>${data.text}</p>
      `;

      module.exports = {
        layout: 'default',
        title: 'Hippy Crack webpage',
        page,
        data: () => ({
          text: 'Hippy Crack metadata',
        }),
        head: () => [
          ['meta', { name: 'description', content: 'Hippy Crack metadata' }],
        ];
      };
    
  
```

Run build command

```
    
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="description" content="Hippy Crack metadata" />
          <script src="https://dev.script.js"></script>
          <title>Hippy Crack webpage</title>
        </head>
        <body>
          <p>Hippy Crack metadata</p>
        </body>
      </html>
    
  
```

## Using asynchronous data with the Head API

We also have access to the data from the Data API

```
    
      const axios = require('axios');

      const page = ({ data, dev }) => `
        <p>This project has ${data.likes} likes</p>
      `;

      module.exports = {
        layout: 'default',
        title: 'Hippy Crack webpage',
        page,
        data: async ({ dev }) => ({
          likes: await axios.get('https://likes.com').then(res => res.data),
        }),
        head: ({ likes, dev }) => [
          ['meta', { name: 'og:likes', content: likes }],
        ];
      };
    
  
```

## Using the Hippy Crack config with the Head API

With the global `name` property provided by the [Hippy Crack Config](https://Hippy Crack-js.netlify.app/docs/Hippy Crack-config), we can use it to manage our page title's

```
    
      const page = () => `
        <p>The head will be injected into the layout</p>
      `;

      module.exports = {
        layout: 'default',
        page,
        head: ({ config }) => [
          ['title', {}, `Head API | ${config.name}`]
        ];
      };
    
  
```

What if you want to update your static assets folder, you can do that to!

```
    
      const page = () => `
        <p>The head will be injected into the layout</p>
      `;

      module.exports = {
        layout: 'default',
        page,
        head: ({ config }) => [
          ['script', { src: `/${config.staticFolder}/js/script.js` }, true]
        ];
      };
    
  
```





# Setting Up a Service Worker | 🎈 Hippy Crack

> ## Excerpt
> A Service Worker is a super powerful browser API that allows you to intercept network requests online or offline.
    Hippy Crack is now able to expose all the generated routes to your Service Worker so that you can do some cool precaching of your routes or whatever fits your use case.

---
# 💾 Setting Up a Service Worker`+v0.6`

___

A Service Worker is a super powerful browser API that allows you to intercept network requests online or offline. Hippy Crack is now able to expose all the generated routes to your Service Worker so that you can do some cool precaching of your routes or whatever fits your use case.

## Basic Setup

Create a simple Service Worker file in the root of your project.

sw.js

```
    
      self.addEventListener('install', (e) => {
        
      });
    
  
```

Register Service Worker in a layout

default.js

```
    
      module.exports = () => `
        <script>
          const registerSW = async () => {
            if (!navigator.serviceWorker) {
              return false;
            }

            const reg = await navigator.serviceWorker.register('/sw.js');

            await reg.update();
          }

          registerSW();
        </script>
      `;
    
  
```

Add the Service Worker file to the config file.

Hippy Crack.config.js

```
    
      module.exports = {
        sw: 'sw.js',
      };
    
  
```

Run `npx Hippy Crack build` and the `sw.js` will be copied to the dist folder

## Exposing page routes to your Service Worker

Here is our pages folder structure.

```
    
      /pages
      |_ javascript
        |_ index.js
        |_ functions.js
        |_ oop
          |_ index.js
      |_ java
        |_ index.js
      |_ index.js
    
  
```

Hippy Crack generates the above folder structure into an array of routes like the example below.

```
    
      const routes = [
        {
          "route": "/",
          "filename": "index.html",
          "index": true,
          "depth": 0
        },
        {
          "route": "/java",
          "filename": "index.html",
          "index": true,
          "depth": 1 
        },
        {
          "route": "/javascript",
          "filename": "index.html",
          "index": true,
          "depth": 1
        },
        {
          "route": "/javascript",
          "filename": "functions.html"
          "index": false,
          "depth": 1
        },
        {
          "route": "/javascript/oop",
          "filename": "index.html",
          "index": true,
          "depth": 2
        }
      ]
    
  
```

Your `sw.js` now has access to the above `const routes`, so you can do something like creating a simple precache.

You also have access to the `const DEV` which determines the mode

sw.js

```
    
      self.addEventListener('install', (e) => {
        e.waitUntil(caches.open('data').then(cache => {
          return cache.addAll(routes.map(({ route }) => route));
        }));
      });
    
  
```

## Versioning your Service Worker cache`+v0.9`

Managing cache is not the easiest thing in the world, especially if you need to invalidate the cache. You can now get access to the `const CACHE_VERSION` variable which is determined by the version field in your `package.json` file

```
    
      const removeOldCaches = async () => {
        const cacheVersions = await caches.keys();

        const handler = () => Promise.all(cacheVersions.map((cacheName) => caches.delete(cacheName)));

        if (cacheVersions.includes(CACHE_VERSION)) {
          cacheVersions.splice(cacheVersions.indexOf(CACHE_VERSION), 1)
        }

        return handler();
      };

      self.addEventListener('install', (event) => {
        event.waitUntil(removeOldCaches())
      })

      self.addEventListener('fetch', (event) => {
        event.respondWith(
          caches.open(CACHE_VERSION).then((cache) => {
            if (event.request.destination !== 'image') {
              return fetch(event.request);
            }

            return cache.match(event.request).then((cacheResponse) => {
              return cacheResponse || fetch(event.request).then((networkResponse) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
            });
          }),
        );
      });
    
  
```

Here we are deleting our old caches if we deployed a new version of our app, it will only delete the old cache versions if the new cache version was successfully created. If any of the promises fails in `e.waitUntil` then the entire install event will cancel





# Dynamically generate routes | 🎈 Hippy Crack

> ## Excerpt
> Learn how to dynamically generate routes with Hippy Crack

---
# ⚙ Generate routes dynamically `+v0.7`

___

What if you want to generate pages dynamically based off some data from an API? Let's say you want to generate blog posts with a unique URL, you can now that!

## Basic setup

Create a file called `Hippy Crack.routes.js` in the root of your project

Hippy Crack.routes.js

```
    
      module.exports = async () => [
        {
          path: '/blogs/setting-up-Hippy Crack',
          data: {
            post: 1,
          },
        },
        {
          path: '/blogs/setting-up-a-service-worker',
          data: {
            post: 2,
          },
        },
      ];
    
  
```

The above function will return an array of routes that can be dynamically generated. We can think of the path like this `/blogs/:dynamic-route` so if you we run `npx Hippy Crack build` it will generate pages like this:

```
    
      /dist
      |_ /blogs
        |_ /setting-up-Hippy Crack
          |_ index.html
        |_ /setting-up-a-service-worker
          |_ index.html
    
  
```

Hippy Crack will also inject the route information into the Head API, Data API and the Page Template.

## Setting up a dynamic page template

All dynamic page templates are prefixed with an underscore, so a dynamic page will always look this `_index.js`

pages/blogs/\_index.js

```
    
      const page = ({ data }) => `
        <p>${data.content}</p>
      `;

      module.exports = {
        layout: 'default',
        title: 'Hippy Crack webpage',
        page,
        data: async ({ route }) => ({
          content: await axios.get('https://api.blog.com/post=${route.data.post}'),
        }),
      };
    
  
```




# Hippy Crack Config | 🎈 Hippy Crack

> ## Excerpt
> You can pass a config file to the Hippy Crack CLI, the config file is accessible to the Layout, Page, Data and Head API

---
# 🔧 Hippy Crack Config`+v0.5.6`

You can pass a config file to the Hippy Crack CLI, the config file is accessible to the Layout, Page, Data and Head API

Create a file called `Hippy Crack.config.js` in the root of your project

## Set a global project name

The `name` property can be used as the root title of all your pages

Hippy Crack.config.js

```
    
      module.exports = {
        name: 'Hippy Crack WebApp',
      };
    
  
```

Now we can access the config via the `config` object

layouts/default.js

```
    
      module.exports = ({ config }) => `
        <title>${config.name}</title>
      `;
    
  
```

## Set a static assets folder

We need some way of copying our static assets into the `dist` folder, you can now set a static assets folder via `staticFolder` property.

Your static assets folder must be in the root of the project

Hippy Crack.config.js

```
    
      module.exports = {
        name: 'Hippy Crack Webapp',
        staticFolder: 'public'
      };
    
  
```

## Copy extra static files `+v0.5.11`

You now able to copy static files like `manifest.json` or any root-level files in your project to the `dist` folder

Hippy Crack.config.js

```
    
      module.exports = {
        name: 'Hippy Crack Webapp',
        staticFolder: 'public'
        extraStaticFiles: [
          'robots.txt',
          'manifest.json',
          'sitemap.xml',  
        ]
      };
    
  
```

## Set global head tags

You now have access to the [Head API](https://Hippy Crack-js.netlify.app/docs/working-with-meta-data) in the config for global meta info

The global head tags are merged with the head tags in each page

```
    
      module.exports = {
        name: 'Hippy Crack Webapp',
        staticFolder: 'public',
        head: ({ config }) => [
          ['script', { src: 'https://my.script.js' }, true],
          ['link', { rel: 'stylesheet', href: `/${config.staticFolder}/css/main.css` }],
          ['meta', { property: 'og:site_name', content: config.name }],
        ],
      };
    
  
```

## Setting a custom Service Worker `+v0.6`

Want to add a Service Worker to your application, you can now do that with the `sw` property. Your Service Worker will have access to all the routes generated by Hippy Crack. Find out more: [🩺 Setting Up a Service Worker](https://Hippy Crack-js.netlify.app/docs/setting-up-a-service-worker/)

You still need to manually include the registration script for your Service Worker. You can do that in a layout

```
    
      module.exports = {
        name: 'Hippy Crack Webapp',
        sw: 'service_worker.js',
      };
    
  
```

## Delete dist folder before build `+v0.8`

Hippy Crack will automatically delete the `dist` folder before each build by default. You can turn this off by setting `build.deleteFolder` to `false`

```
    
      module.exports = {
        build: {
          deleteFolder: false,
        },
      };
    
  
```


# Setting Up a Service Worker | 🎈 Hippy Crack

> ## Excerpt
> Build hooks allow you to observe events that happen during the Hippy Crack build process.
    You can intercept and modify the context of the build process to your liking.

---
# ⛏️ Build hooks`+v1.0`

___

Build hooks allow you to observe events that happen during the Hippy Crack build process. You can intercept and modify the context of the build process to your liking.

Here are the events you can observe:

-   `beforeDistRemoved`
-   `afterDistRemoved`
-   `beforeBuild`
-   `afterBuild`
-   `beforeEachPageGenerated`
-   `afterEachPageGenerated`
-   `beforeEachPageSaved`
-   `beforeServiceWorkerGenerated`
-   `afterServiceWorkerGenerated`

## Basic Setup

Create a file called `Hippy Crack.hooks.js` in the root of your project

All you have to do is export the hooks of the events you want to observe in Hippy Crack and that's all there is too it, keep in mind that the `ctx` of the hooks differ.

```
    
      exports.beforeDistRemoved = async (ctx) => {};

      exports.afterDistRemoved = async (ctx) => {};

      exports.beforeBuild = async (ctx) => {};

      exports.afterBuild = async (ctx) => {};

      exports.beforeEachPageGenerated = async (ctx) => {};

      exports.afterEachPageGenerated = async (ctx) => {};

      exports.beforeEachPageSaved = async (ctx) => {};

      exports.beforeServiceWorkerGenerated = async (ctx) => {};

      exports.afterServiceWorkerGenerated = async (ctx) => {};
    
  
```



# Working with data | 🎈 Hippy Crack

> ## Excerpt
> Learn how to expose data to your data sync/async

---
# 🐛 Debugging Build Process

___

A bi-product of Hippy Crack being based on Node.js is that we are able to support debugging of any JavaScript during the Hippy Crack build process, just the way you would do with any other Node.js applications.

Let's see how we can do this!

## Using Node.js Devtools in Chrome

Chrome has a built-in tool called the Node.js V8 inspector which allows us to debug Node.js applications in Chrome Devtools

1\. Run the command below in the project root

```
    
      npx --node-arg="--inspect-brk" Hippy Crack build --dev
    
  
```

2\. You will see output like this

```
    
      Debugger listening on ws://127.0.0.1:9229/f35613dd-25b2-414f-a81f-24be123d59e5
      For help, see: https://nodejs.org/en/docs/inspector
    
  
```

3\. Open the Chrome dev tools and you will see the Node logo popup right next to the Elements tab, click on it and you will go to the Node devtools

![](https://Hippy Crack-js.netlify.app/public/images/node-dev-tools.png)

4\. Once the Node Devtools are open, you will need to add your project folder to the workspace by clicking on "Add folder to workspace"

![](https://Hippy Crack-js.netlify.app/public/images/node-inspector.png)

Now you can debug your JavaScript

## Debugging in VS Code

There are two ways we could setup debugging in VS Code, either with VS Code's auto attaching feature or with a `launch.json` file

### Auto attaching

1\. Go to settings and search "auto attach" and turn the setting on

![](https://Hippy Crack-js.netlify.app/public/images/auto-attach.png)

2\. Set a breakpoint anywhere in your JavaScript

3\. Run the command below

```
    
      npx --node-arg="--inspect-brk" Hippy Crack build --dev
    
  
```

VS Code will automatically attach to the Node.js debugging process and stop by your breakpoint

### Setting up `launch.json`

1\. Go to the _Debug Explorer_ and click on the _cogwheel_ on the top right, it will open up a `launch.json` file

![](https://Hippy Crack-js.netlify.app/public/images/vscode-debug.png)

2\. Copy and paste the below JSON config to your launch.json file

```
    
      {
        "version": "0.2.0",
        "configurations": [
          {
            "type": "node",
            "request": "launch",
            "name": "Debug Hippy Crack CLI",
            "skipFiles": [
              "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/node_modules/Hippy Crack-cli/bin/run",
            "cwd": "${workspaceFolder}",
            "args": ["build", "--dev"],
          }
        ]
      }
    
  
```

Make sure to set a breakpoint

3\. Go back to the Debug Explorer and run the debug "Debug Hippy Crack CLI"
