const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if (!res.ok) {
                throw new Error(
                    `Failed to fetch posts with status : ${res.status}`
                );
            }

            return res.json();
        })
        .catch((err) => console.error(err));
};

export default getPosts;
