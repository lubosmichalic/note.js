function testNoteHasText() {
  var note = new Note("Hello World!");
  assert.isTrue(note.text === "Hello World!");
};
testNoteHasText()

function testNoteCheckTextMethod() {
  var note = new Note("Hello again!");
  assert.isEqual(note.checkText(), "Hello again!");
};
testNoteCheckTextMethod();
