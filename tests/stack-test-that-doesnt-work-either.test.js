const stack = require('../src/stack');

//add 5 things to the stack then delete 2 and get the one in the middle
test("add five elements to the stack", () => {
    stack.push(1);
    stack.push(12);
    stack.push(123);
    stack.push(1234);
    stack.push(12345);

    stack.push("Davy Jones");
    expect(stack.peek()).toBe(12345);
});

test("delete two elements in the stack and then peek on the top element", () => {
    stack.pop();
    stack.pop();

    expect(stack.peek()).toBe("fiddlesticks"); //this seems to be wrong for some reason
});

/*
test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});
*/