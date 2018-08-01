// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Vai`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00A500, 0x00A62B]
  ]
});
testPropertyEscapes(
  /^\p{Script=Vai}+$/u,
  matchSymbols,
  "\\p{Script=Vai}"
);
testPropertyEscapes(
  /^\p{Script=Vaii}+$/u,
  matchSymbols,
  "\\p{Script=Vaii}"
);
testPropertyEscapes(
  /^\p{sc=Vai}+$/u,
  matchSymbols,
  "\\p{sc=Vai}"
);
testPropertyEscapes(
  /^\p{sc=Vaii}+$/u,
  matchSymbols,
  "\\p{sc=Vaii}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A4FF],
    [0x00A62C, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Vai}+$/u,
  nonMatchSymbols,
  "\\P{Script=Vai}"
);
testPropertyEscapes(
  /^\P{Script=Vaii}+$/u,
  nonMatchSymbols,
  "\\P{Script=Vaii}"
);
testPropertyEscapes(
  /^\P{sc=Vai}+$/u,
  nonMatchSymbols,
  "\\P{sc=Vai}"
);
testPropertyEscapes(
  /^\P{sc=Vaii}+$/u,
  nonMatchSymbols,
  "\\P{sc=Vaii}"
);