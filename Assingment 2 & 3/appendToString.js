function appendToString(str1, str2) {
  return str1 + str2;
}
console.log(appendToString("Hello", " World!")); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
