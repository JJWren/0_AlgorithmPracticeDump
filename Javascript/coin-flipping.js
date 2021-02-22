function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while (headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if (result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
                if (headsCount === 5 && attempts <= 100) {
                    resolve(
                        `It took ${attempts} attempts to flip five "heads"`
                    );
                } else {
                    continue;
                }
            } else {
                headsCount = 0;
                if (attempts === 100) {
                    reject(
                        "Could not get heads to flip five times in a row in 100 attempts."
                    );
                }
            }
        }
        return console.log(
            "This is after the resolve/reject. This will show the asynchronization."
        );
    });
}
fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
