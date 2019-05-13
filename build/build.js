const axios = require('axios');
const path = require('path');
const FS = require('fs-extra');

const tempHTML = path.resolve(process.cwd(), 'build', 'index.html');
const outputHTML = path.resolve(process.cwd(), 'index.html');

axios.get('https://api.github.com/search/repositories?q=user:jaywcjlove&per_page=100')
  .then((response) => createHTML(response.data))
  .then((html) => {
    let str = FS.readFileSync(tempHTML);
    html = str.toString().replace(/{{content}}/, html);
    return html
  })
  .then((html) => FS.outputFileSync(outputHTML, html))
  .catch((error) => {
    console.log(error);
  });


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