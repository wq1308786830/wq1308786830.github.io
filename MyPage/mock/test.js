/**
 * Created by flyin on 2017/4/26.
 */
let Mock = require('mockjs');
let data = Mock.mock('app/getList', 'get', () => {
  "use strict";
  // Let's populate this page with some filler content for funzies
  let icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

  let items = [];
  for (let i = 1; i < 11; i++) {
    items.push({
      title: 'Item ' + i,
      note: 'This is item #' + i,
      icon: icons[Math.floor(Math.random() * icons.length)]
    });
  }
  return items;
});
// 输出结果
console.log(JSON.stringify(data, null, 4));