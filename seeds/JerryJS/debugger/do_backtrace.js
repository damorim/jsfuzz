// Copyright JS Foundation and other contributors, http://js.foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//print("backtrace-test");

function f4() {
	//print("function f4");
	if(cat !== 'cat'){
		throw new Error("Test fail")
	}
}

function foo() {
  //print("function foo");
  var tmp = 4;
  f4();
}

var cat = 'cat';

function test() {
	//print("function test");
	foo();
}

var
	x =
	  1;

test();