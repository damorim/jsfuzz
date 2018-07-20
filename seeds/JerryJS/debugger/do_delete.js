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

//print("delete tests");

var x = 10;
var y = 10;
var pi = 3.14;

function delete_test(x,y) {
	var sum = x + y;
	if (sum !== 20) {
		throw new Error("Test fail")
	}
	return
}

var output = delete_test(x, y);
if (output !== undefined) {
	throw new Error("Test fail")
} 

var z = 0;