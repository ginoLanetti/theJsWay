//Handling classes

const has = (id, someClass) => {

    if (document.getElementById(id) === null) {
        console.error(`No element with id ${id}`);
    } else {
        const isPresent = Array.from(document.getElementById(id).classList).indexOf(someClass);
        if (isPresent < 0) {
            console.log(false);
        } else {
            console.log(true);
        }
    }
};

has("saxophone", "woodwind"); // Should show true
has("saxophone", "brass"); // Should show false
has("trumpet", "brass"); // Should show true
has("contrabass", "chordophone"); // Should show an error message