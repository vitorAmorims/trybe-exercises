const { users, findUserById, getUserName } = require("./ex2");
// console.log(typeof findUserById)

describe("getUserName - promise", () => {
  describe("when the user id exists", () => {
    it("returns the user name", () => {
      expect.assertions(1);
      return getUserName(4).then((data) => expect(data).toEqual("Mark"));
    });
  });

    describe("When the user id not exist", () => {
        it("return message error", () => {
        expect.assertions(1);
        return getUserName(7).catch(error => 
            expect(error).toEqual({ error: "User with 7 not found." })
        );
        });
    });

  describe("when the user id does not exists", () => {
    it("returns an error", () => {
      expect.assertions(1);
      return getUserName(2).catch((error) =>
        expect(error).toEqual({ error: "User with 2 not found." })
      );
    });
  });


});
