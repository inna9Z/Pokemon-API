import getPosts from './getPosts.js';

describe('getPosts', () => {
    // Setup fetch as a mock function before each test
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    // Clear all mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('fetches posts successfully', async () => {
        const fakePosts = [
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' },
        ];
        global.fetch.mockResolvedValueOnce({
            json: () => Promise.resolve(fakePosts),
        });

        const result = await getPosts();
        expect(result).toEqual(fakePosts);
    });

    it('handles fetch error', async () => {
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});
        global.fetch.mockRejectedValueOnce(new Error('Fetch failed'));

        await getPosts();
        expect(consoleErrorSpy).toHaveBeenCalledWith(new Error('Fetch failed'));

        // Restore console.error to its original implementation
        consoleErrorSpy.mockRestore();
    });
});
