function interpret(command: string): string {
  let shallowCopy = command;
  let cmdArr = command.split("");

  for (let i = 0; i < cmdArr.length; i++) {
    shallowCopy = shallowCopy.replace("()", "o");
    shallowCopy = shallowCopy.replace("(al)", "al");
  }

  return shallowCopy;
}

console.log(interpret("G()()()()(al)"));
