// Thực hiện 1 danh sách công việc theo trình tự
// 1. Walk the dog
// 2. Clean the kitten
// 3. Take out the trash

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;

            if (dogWalked) {
                resolve("You walk the dog 🐕");
            } else {
                reject("You DID'T walk the dog 🐕");
            }
        }, 1500);
    });
}

function cleanKitten() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kittenCleaned = true;

            if (kittenCleaned) {
                resolve("You clean the kitten 🧹");
            } else {
                reject("You DID'T clean the kitten 🧹");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;

            if (trashTakenOut) {
                resolve("You take out the trash ♻️");
            } else {
                reject("You DID'T take out the trash ♻️");
            }
        }, 500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKittenResult = await cleanKitten();
        console.log(cleanKittenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
    } catch (error) {
        console.error(error);
    }
}
