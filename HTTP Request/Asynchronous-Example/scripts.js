const result = document.getElementById('result');

let approval = 'Not approved!';

// handle asyncronous using callback function
/* function getApproval (callback) {
    setTimeout(() => {
        approval = 'Approved!';
        callback();
    }, 500);
}

getApproval(() => {
    result.textContent = approval;
});

result.textContent = approval; */

// Handle asyncronous using promises
/* function getApproval() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Approved!');
        }, 500);
    });
}

getApproval().then((resolveApproval) => {
    result.textContent = resolveApproval;
});

result.textContent = approval; */

// Async/await
function getApproval() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Approved!');
        }, 500);
    });
}

async function setApprovalText() {
    const approvalPromise = getApproval();
    result.textContent = await approvalPromise;
}

setApprovalText();