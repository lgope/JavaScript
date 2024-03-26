function fetchURLsWithDelay(urls) {
    let index = 0;

    function fetchNext() {
        if (index < urls.length) {
            fetch(urls[index])
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Data fetched:', data);
                    index++;
                    setTimeout(fetchNext, 1000); // 1000 milliseconds = 1 second
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    index++;
                    setTimeout(fetchNext, 1000); // Move to next URL even if there's an error
                });
        }
    }

    fetchNext();
}

// Example usage:
const urls = ['https://example.com/url1', 'https://example.com/url2'];
fetchURLsWithDelay(urls);
