import "mocha";

let testResults: any  = [];

export function setUpServer() {
        return (getScore) => {
            mocha.run()
                .on('pass', (test) => {
                    testResults.push({
                        passed: true,
                        score: getScore(test),
                        message: test.title
                    })
                })
                .on('fail', (test, err) => {
                    testResults.push({
                        passed: false,
                        message: test.title,
                        score: getScore(test),
                        failed: err.message
                    })
                })
                .on('end', testRequest)
        };
}

function testRequest() {
    console.log(testResults);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3939', true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            console.log(xhr.response);
        }
    }
    xhr.send(JSON.stringify(testResults));
}