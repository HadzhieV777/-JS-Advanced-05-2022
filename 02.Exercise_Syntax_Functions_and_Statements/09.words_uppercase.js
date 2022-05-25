function solve(string) {
    let text = string.toUpperCase();
    let pattern = /\w+/g;
    let words = text.match(pattern);
    console.log(words.join(', '));
}
solve('Hi, how are you?')