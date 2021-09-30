const axios = require('axios');
const path = require('path');
const FS = require('fs-extra');

const tempHTML = path.resolve(process.cwd(), 'build', 'index.html');
const outputHTML = path.resolve(process.cwd(), 'index.html');

const hotProjectData = [
  {
    org: 'jaywcjlove',
    name: 'tsbb',
    pgkName: 'tsbb',
    description: 'TSBB is a zero-config CLI that helps you develop, test, and publish modern TypeScript project.',
  },
  {
    org: 'kktjs',
    name: 'kkt',
    pgkName: 'kkt',
    description: 'Create React apps with no build configuration, Cli tool for creating react apps.',
  },
  {
    org: 'jaywcjlove',
    name: 'hotkeys',
    pgkName: 'hotkeys-js',
    description: 'A robust Javascript library for capturing keyboard input. It has no dependencies.',
  },
  {
    org: 'jaywcjlove',
    name: 'colors-cli',
    pgkName: 'colors-cli',
    description: 'Terminal string styling done right.',
  },
  {
    org: 'uiwjs',
    name: 'react-markdown-preview',
    pgkName: '@uiw/react-markdown-preview',
    description: 'React component preview markdown text in web browser. The minimal amount of CSS to replicate the GitHub Markdown style.',
  },
  {
    org: 'uiwjs',
    name: 'react-md-editor',
    pgkName: '@uiw/react-md-editor',
    description: 'A simple markdown editor with preview, implemented with React.js and TypeScript.',
  },
  {
    org: 'jaywcjlove',
    name: 'mocker-api',
    pgkName: 'mocker-api',
    description: 'mocker-api that creates mocks for REST APIs. It will be helpful when you try to test your application without the actual REST API server.',
  },
  {
    org: 'uiwjs',
    name: 'babel-plugin-transform-remove-imports',
    pgkName: 'babel-plugin-transform-remove-imports',
    description: `Remove the specified import declaration when you use the babel transform to build the package.`,
  },
  {
    org: 'jaywcjlove',
    name: 'react-hotkeys',
    pgkName: 'react-hot-keys',
    description: 'React component to listen to keydown and keyup keyboard events, defining and dispatching keyboard shortcuts.',
  },
  {
    org: 'uiwjs',
    name: 'react-codemirror',
    pgkName: '@uiw/react-codemirror',
    description: 'CodeMirror component for React.',
  },
  {
    org: 'jaywcjlove',
    name: 'rehype-rewrite',
    pgkName: 'rehype-rewrite',
    description: 'Rewrite element with rehype.',
  },
  {
    org: 'jaywcjlove',
    name: 'store.js',
    pgkName: 'storejs',
    description: 'A simple, lightweight JavaScript API for handling browser localStorage , it is easy to pick up and use, has a reasonable footprint 2.36kb(gzipped: 1.04kb), and has no dependencies.',
  },
  {
    org: 'jaywcjlove',
    name: 'cookie.js',
    pgkName: 'cookiejs',
    description: 'A simple, lightweight JavaScript API for handling browser cookies, it is easy to pick up and use, has a reasonable footprint (~2kb) (gzipped: 0.84kb), and has no dependencies. It should not interfere with any JavaScript libraries or frameworks.',
  },
  {
    org: 'jaywcjlove',
    name: 'svgtofont',
    pgkName: 'svgtofont',
    description: 'Read a set of SVG icons and ouput a TTF/EOT/WOFF/WOFF2/SVG font.',
  },
  {
    org: 'jaywcjlove',
    name: 'compile-less',
    pgkName: 'compile-less-cli',
    description: 'All `.less` files are compiled into `.css` files.',
  },
  {
    org: 'jaywcjlove',
    name: 'iNotify',
    pgkName: '@wcjiang/notify',
    description: 'JS achieve the browser title flashing, scrolling, voice prompts, Chrome/Safari/FireFox/IE notice. has no dependencies. It not interfere with any JavaScript libraries or frameworks. has a reasonable footprint 5.05kb (gzipped: 1.75kb)',
  },
  {
    org: 'jaywcjlove',
    name: 'recursive-readdir-files',
    pgkName: 'recursive-readdir-files',
    description: 'Node.js module to list all files in a directory or any subdirectories.',
  },
  {
    org: 'uiwjs',
    name: 'react-markdown-editor',
    pgkName: '@uiw/react-markdown-editor',
    description: 'A markdown editor with preview, implemented with React.js and TypeScript.',
  },
  {
    org: 'uiwjs',
    name: 'react-heat-map',
    pgkName: '@uiw/react-heat-map',
    description: `A lightweight calendar heatmap react component built on SVG, customizable version of GitHub's contribution graph.`,
  },
  {
    org: 'uiwjs',
    name: 'react-color',
    pgkName: '@uiw/react-color',
    description: `Is a tiny color picker widget component for React apps.`,
  },
  {
    org: 'uiwjs',
    name: 'react-textarea-code-editor',
    pgkName: '@uiw/react-textarea-code-editor',
    description: `A simple code editor with syntax highlighting.`,
  },
  {
    org: 'uiwjs',
    name: 'react-baidu-map',
    pgkName: '@uiw/react-baidu-map',
    description: `基于 React 封装的百度地图组件，支持 React Hook，帮助你轻松的接入地图到 React 项目中。`,
  },
  {
    org: 'uiwjs',
    name: 'next-remove-imports',
    pgkName: 'next-remove-imports',
    description: `The default behavior is to remove all .less/.css/.scss/.sass/.styl imports from all packages in node_modules.`,
  },
  {
    org: 'uiwjs',
    name: 'react-amap',
    pgkName: '@uiw/react-amap',
    description: '基于 React 封装的高德地图组件，帮助你轻松的接入地图到 React 项目中。',
  },
  {
    org: 'jaywcjlove',
    name: 'image2uri',
    pgkName: 'image2uri',
    description: 'Convert image file to data URI.',
  },
  {
    org: 'jaywcjlove',
    name: 'react-monacoeditor',
    pgkName: '@uiw/react-monacoeditor',
    description: 'Monaco Editor component for React.',
  },
  {
    org: 'jaywcjlove',
    name: 'rehype-attr',
    pgkName: 'rehype-attr',
    description: 'New syntax to add attributes to Markdown.',
  }
]

axios.get('https://api.github.com/search/repositories?q=user:jaywcjlove&per_page=100')
  .then((response) => createHTML(response.data))
  .then((html) => {
    let str = FS.readFileSync(tempHTML);
    html = str.toString().replace(/{{content}}/, html);
    return html
  })
  .then((html) => hotProjects(html))
  .then((html) => FS.outputFileSync(outputHTML, html))
  .catch((error) => {
    console.log(error);
  });

function hotProjects(htmlProject) {
  return new Promise((resolve, reject) => {
    const html = [];
    hotProjectData.forEach(({ pgkName, href, org, name, description, homepage }) => {
      href = `https://github.com/${org}/${name}`
      const downImg = `https://img.shields.io/npm/dm/${pgkName}.svg?style=flat`;
      html.push('<li>')
      html.push(`<a target="_blank" href="${href}">${name}</a>`)
      html.push('<br />')
      html.push(`<img src="https://img.shields.io/github/stars/${org}/${name}.svg?style=flat&label=Star"/> `)
      html.push(`<img src="https://img.shields.io/github/forks/${org}/${name}.svg?style=flat&label=Fork"/>`)
      if (pgkName) {
        html.push(`
          <a href="https://www.npmjs.com/package/${pgkName}" target="_blank">
            <img alt="${downImg}" src="${downImg}"/>
          </a>
        `);
      }
      if (description) {
        html.push(`<p>${description} ${homepage ? `<a target="_blank" href="${homepage}">${homepage}</a>` : ''}</p>`)
      }
      html.push('</li>')
    });
    resolve(htmlProject.replace(/{{hotProjects}}/, html.join('')));
  })
}

function createHTML(data) {
  return new Promise((resolve, reject) => {
    const html = [];
    if (data && data.items) {
      data.items.forEach((item, idx) => {
        html.push(`
          <li>
            <a target="_blank" href="${item.html_url}">${item.name}</a>
            <br />
            <img src="https://img.shields.io/github/stars/jaywcjlove/${item.name}.svg?style=flat&label=Star"/>
            <img src="https://img.shields.io/github/forks/jaywcjlove/${item.name}.svg?style=flat&label=Fork"/>
            ${item.description ? `<p>${item.description} ${item.homepage ? `<a target="_blank" href="${item.homepage}">${item.homepage}</a>` : ''}</p>` : ''}
          </li>
        `);
      })
    }
    resolve(html.join(''));
  })
}