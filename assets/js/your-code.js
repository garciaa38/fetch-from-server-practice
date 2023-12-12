export function getAllDogs() {
    const url = '/dogs';
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'text/html'},
        body: new URLSearchParams({
            key: 'value'
        })
    };

    return fetch(url);
}

export function getDogNumberTwo() {
    const url = '/dogs/2';
    return fetch(url);
}

export function postNewDog() {
    // Your code here
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}
