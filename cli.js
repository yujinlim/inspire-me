#!/usr/bin/env node
'use strict';

const meow = require('meow');
const getQuote = require('forbes-quote');

meow(`
  Usage
    $ inspire-me

  Examples:
    $ inspire-me
    "Teach self-denial and make its practice pleasure, and you can
    create for the world a destiny more sublime that ever issued from the brain of the wildest dreamer."

    --  Sir Walter Scott
`);

getQuote()
  .then(function(quote) {
    console.log(`
      "${quote.quote}"

      -- ${quote.author}
    `);
    process.exit(0);
  })
  .catch((err) => {
    console.log('Too Bad! No inspirational quote today!');
    process.exit(0);
  });
