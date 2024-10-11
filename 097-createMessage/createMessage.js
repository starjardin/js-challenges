function createMessage(m) {
    let messageParts = [m];
    
    function concat(nextPart) {
        if (nextPart === undefined) {
            return messageParts.join(' ');
        }
        messageParts.push(nextPart);
        return concat;
    }

    return concat;
}

console.log(createMessage("Hello")(" World!")("there")());
