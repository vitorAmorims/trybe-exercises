const getRepos = require('./ex4');


// it('gets a list of repositories names', () => {
//   const url = 'https://api.github.com/users/tryber/repos';

//   return getRepos(url).then(result => {
//     expect(result).toContain('sd-01-week4-5-project-todo-list');
//     expect(result).toContain('sd-01-week4-5-project-meme-generator');
//   });
// });

describe("When requesting a repository", () => {
    it("should gets a list of repositories names", async (done) => {
        const response = await getRepos('https://api.github.com/users/tryber/repos');
        expect(response).toContain('sd-00-block5-project-pixels-art');
        expect(response).toContain("hackatrybe-covid");
        done();
    })
})
