const { users, findUserById, getUserName } = require("./ex3");
// console.log(typeof findUserById)

describe("getUserName - async/await", () => {
  describe("when the user id exists", () => {
    it("returns the user name", async (done) => {
    const response = await getUserName(4);
    expect(response).toBe("Mark");
    done();
    });
  });

    describe("When the user id not exist", () => {
        it("return message error", async (done) => {
            try {
                await getUserName(7);
            } catch (error) {
                expect(error).toEqual({ error: 'User with 7 not found.' });
                done();
            }
        })
    });

  describe("when the user id does not exists", () => {
    it("returns an error", () => {
      expect.assertions(1);
      return expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' })
    });
  });

});
