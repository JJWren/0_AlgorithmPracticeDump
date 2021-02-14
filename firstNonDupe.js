function firstNotRepeatingCharacter(s) {
    let stringSet = new Set(s);
    let listOfSet = [];
    stringSet.forEach(letter => listOfSet.push(letter));

    for(i = 0; i < listOfSet.length; i++) {
        let count = 0;

        for(j = 0; j < s.length; j++) {
            if(s[j] == listOfSet[i]) {
                count++;

                if(count > 1) {
                    break;
                }
            }
        }

        if(count <= 1) {
            return listOfSet[i];
        }
    }
    return '_';
}

let s = "abacabad";
console.log(firstNotRepeatingCharacter(s));