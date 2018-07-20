// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Refer 13.1; 
    It is a SyntaxError if any Identifier value occurs more than once within a FormalParameterList of a strict mode
    FunctionDeclaration or FunctionExpression.
es5id: 13.1-7-s
description: >
    Strict Mode - SyntaxError is thrown if a function is created in
    'strict mode' using a FunctionDeclaration and the function has
    three identical parameters
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

// throw "Test262: This statement should not be evaluated.";

function _13_1_7_fun(param, param, param) { }
