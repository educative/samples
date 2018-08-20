describe('getTodo', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8000/');
    });
    it('is a function', async () => {
        const todoFunc = await page.evaluate(`typeof getTodo`);
        expect(todoFunc).toBe(`function`);
    });
    it('resolves to a value', async () => {
        const expectedResponse = await page.evaluate(() => {
            return Promise.resolve(getTodo(1));
        });
        const actualResponse = await page.evaluate(() => {
            const request = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
            return Promise.resolve(request);
        });
        expect(expectedResponse).toEqual(actualResponse);
    });
});