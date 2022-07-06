// example: http://localhost:5000/user/register
//          returns => {"username: "bob123", password: "icecream"}
//          "POST"
export async function fetchData(route='', data, methodType) {
    // send over data to specified route in server
    const response = await fetch(`${route}`, {
        method: methodType, 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    // deal with response from server
    if(response.ok) {
        return await response.json();
    } else {
        throw await response.json();
    }
}