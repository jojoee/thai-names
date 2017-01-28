# thai-names

[![Travis](https://img.shields.io/travis/jojoee/thai-names.svg)](https://travis-ci.org/jojoee/thai-names)
[![Codecov](https://img.shields.io/codecov/c/github/jojoee/thai-names.svg)](https://codecov.io/github/jojoee/thai-names)
[![Download - Github All Releases](https://img.shields.io/github/downloads/jojoee/thai-names/total.svg)]()
[![Download - npm](https://img.shields.io/npm/dt/thai-names.svg)](http://npm-stat.com/charts.html?package=thai-names)
[![Version - npm](https://img.shields.io/npm/v/thai-names.svg)](https://www.npmjs.com/package/thai-names)
[![Version - Bower](https://img.shields.io/bower/v/thai-names.svg)](https://bower.io/search/?q=thai-names)
[![License - Bower](https://img.shields.io/bower/l/thai-names.svg)](http://opensource.org/licenses/MIT)
[![License - npm](https://img.shields.io/npm/l/thai-names.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random Thai names

## Installation

```
// npm
npm install starwars-names

// Bower
// src/firstnames.json
```

## Usage for npm

```javascript
var names = require('thai-names');
var allNames = names.all();
var randomName = names.random();
var threeRandomNames = names.random(3);

// Example result
/*
[
  {
    name: 'Aileen',
    meaning: {
      en: '',
      th: 'อเมริกัน แปลว่า แสงสว่าง'
    }
  },
  ...
]
*/
```

## API
- [x] Random
- [x] All
- [ ] Filter by alphabet, keyword, multi-keywords

## Future update
- [x] Separate meaning by pipe (`|`)
- [ ] Demo page
- [ ] Add script to alphabetical order and export to `json` format
- [ ] Add script to check duplication
- [ ] Add submit page (user can submit new name) using [Firebase](https://firebase.google.com/) to store it
- [ ] More name
- [ ] Add surname
- [ ] Add "very" Thai names
- [ ] Combine firstname and surname

## Contribute
1. Fork the repo
2. Install Node.js and dependencies
3. Make a branch for your change and make your changes
4. Run `git add -A` to add your changes
5. Run `npm run commit` (don not use `git commit`)
6. Push your changes with `git push` then create Pull Request

## Contribute for owner
```
$ npm install -g semantic-release-cli
$ semantic-release-cli setup

Using above command to setup "semantic-release"
```

## Reference
- Thai names, credit from [รวบรวมชื่อคนที่สะกดได้ทั้งภาษาไทยและภาษาต่างประเทศ และความหมายของชื่อค่ะ](https://pantip.com/topic/31259696) by [Almond Hambert Jr](https://pantip.com/profile/240418)@22012017-1014
- Great guide - [How to Write an Open Source JavaScript Library](https://egghead.io/courses/how-to-write-an-open-source-javascript-library)
