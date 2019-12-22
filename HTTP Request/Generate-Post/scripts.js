// Get DOM elements
const generateButton = document.getElementById('generate-button');
const postTitle = document.getElementById('post-title');
const postId = document.getElementById('post-id');
const postContent = document.getElementById('post-content');

/**
 * Makes an AJAX request of type 'verb' to 'url' with optional 'data' object
 * Returns a Promise which resolves or rejects with server response
 */
function makeRequest(verb, url, data) {
    return new Promise((resolve, reject) => {

        // create and open AJAX request
        let request = new XMLHttpRequest();
        request.open(verb, url);

        request.onreadystatechange = () => {
            // only execute code if request is ready
            if (request.readyState === 4) {
                // request is successful for codes 200 or 201
                if (request.status === 200 || request.status === 201) {
                    resolve(JSON.parse(request.response));
                } else {
                    reject(JSON.parse(request.response));
                }
            }
        };
        // for POST requests, set Content-Type header and send request with 'data` object
        // otherwise, simply send request
        if (verb === 'POST') {
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(data));
        } else {
            request.send();
        }
    });
}

/**
 * Sends GET requests for uid, title and content in parallel
 * Sends resulting object as POST request
 * Handles response from POST request and prints result to DOM
 */
async function createPost() {
    // create three request Promises (starts sending requests)
    const uidPromise = makeRequest('GET', 'http://ec2-54-70-181-124.us-west-2.compute.amazonaws.com:3000/generate-uid');
    const titlePromise = makeRequest('GET', 'http://ec2-54-70-181-124.us-west-2.compute.amazonaws.com:3000/generate-title');
    const contentPromise = makeRequest('GET', 'http://ec2-54-70-181-124.us-west-2.compute.amazonaws.com:3000/generate-lorem');

    // await responses from three requests and assign to three constants
    const [uidResponse, titleResponse, contentResponse] = await Promise.all([uidPromise, titlePromise, contentPromise]);

    // concatenate data from GET requests and make POST request
    const postPromise = makeRequest('POST',
        'http://ec2-54-70-181-124.us-west-2.compute.amazonaws.com:3000/create-post-with-uid',
        { uid: uidResponse.uid, title: titleResponse.title, content: contentResponse.lorem }
    );

    // assign result to constant and print constant properties to DOM
    const postResponse = await postPromise;
    postTitle.textContent = postResponse.post.title;
    postId.textContent = postResponse.post.id;
    postContent.textContent = postResponse.post.content
}

// click listener for Generate Post! button
generateButton.addEventListener('click', () => {
    createPost();
});
