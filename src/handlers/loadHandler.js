import dom from '../dom.js';
import createPost from '../components/createPost.js';
import getPosts from '../../apis/getPosts.js';

const loadHandler = () => {
    getPosts()
        .then((posts) => {
            if (!Array.isArray(posts)) {
                throw new Error('Expected posts to be an array');
            }

            posts.forEach((postData) => {
                const postDom = createPost(postData);
                dom.root.append(postDom);
            });
        })
        .catch((err) => console.error(err));
};

export default loadHandler;
