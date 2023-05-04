const stack = require('../src/stack');

//add 5 things to the stack then delete 2 and get the one in the middle
test("add five elements to the stack", () => {
    stack.push(1);
    stack.push(12);
    stack.push(123);
    stack.push(1234);
    stack.push(12345);

    expect(stack.peek()).toBe(12345);
});

test("delete two elements in the stack and then peek on the top element", () => {
    stack.pop();
    stack.pop();

    expect(stack.peek()).toBe(123); //this seems to be wrong for some reason
});