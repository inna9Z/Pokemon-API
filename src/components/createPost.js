const createPost = (postData) => {
    // container
    const container = document.createElement('div');
    container.className = 'container';

    // title
    const title = document.createElement('h2');
    title.innerText = postData.title;

    // body
    const body = document.createElement('p');
    body.innerText = postData.body;

    container.append(title, body);
    return container;
};

export default createPost;
