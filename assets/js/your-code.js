export function getAllDogs() {
    const url = '/dogs';
    return fetch(url);
}

export function getDogNumberTwo() {
    const url = '/dogs/2';
    return fetch(url);
}

export function postNewDog() {
    const url = '/dogs';
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
            name: 'Michi',
            age: 4
        })
    };

    return fetch(url, options)

}

export function postNewDogV2(name, age) {
    const url = '/dogs';
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
            name,
            age
        })
    };

    return fetch(url, options)
}

export function deleteDog(id) {
      // Your code here
      return fetch(`/dogs/${id}/delete`, {
        method: 'POST',
        headers: {
            'AUTH': "ckyut5wau0000jyv5bsrud90y"
        }
      })
}
