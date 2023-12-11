const { default: axios } = require("axios");

test("would save data", async () => {
  const urlPost = "http://localhost:3000/create/user";

  const saveTest = await axios.post(urlPost, { nickName: "jamiroquai2010" });

  expect(saveTest.statusText).toBe("Created");
  expect(saveTest.status).toBe(201);
});

test("would update user", async () => {
  const urlPut = "http://localhost:3000/update/user/9";

  const updateTest = await axios.put(urlPut, { nickName: "jamiroquai20011" });

  expect(updateTest.status).toBe(201);
  expect(updateTest.statusText).toBe("Created");
});

test("would got all users", async () => {
  const urlGetAll = "http://localhost:3000/get/all/users";

  const getTest = await axios.get(urlGetAll);

  expect(getTest.status).toBe(200);
  expect(getTest.statusText).toBe("OK");
});

test("would got user by id", async () => {
  const urlGet = "http://localhost:3000/get/user/9";

  const getTest = await axios.get(urlGet);

  expect(getTest.status).toBe(200);
  expect(getTest.statusText).toBe("OK");
});

test("would delete user", async () => {
  const urlDelete = "http://localhost:3000/delete/user/5";

  const deleteTest = await axios.delete(urlDelete);

  expect(deleteTest.status).toBe(204);
  expect(deleteTest.statusText).toBe("No Content");
});
