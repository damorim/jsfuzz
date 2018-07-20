// Copyright 2018 André Bargull; Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale
description: >
    Checks error cases for the options argument to the Locale
    constructor.
info: |
    ApplyOptionsToTag( tag, options )
    ...
    3. Let language be ? GetOption(options, "language", "string", undefined, undefined).
    4. If language is not undefined, then
        a. If language does not match the language production, throw a RangeError exception.
        b. If language matches the grandfathered production, throw a RangeError exception.
    ...

features: [Intl.Locale]
---*/

const testData = [
    {
        tag: "nb",
        options: {
            language: "no-bok",
        },
    },

    {
        tag: "nb",
        options: {
            language: "no-bok",
            region: "NO",
        },
    },
];

for (const {tag, options} of testData) {
    assert.throws(RangeError, function() {
        new Intl.Locale(tag, options);
    });
}
