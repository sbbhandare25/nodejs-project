import request from "supertest";
import app from "../../../src/app";

describe("getHelloWorld.spec", () => {
  it("succeeds", async () => {
    const res: { status: number; body: string } =
      await request(app).get("/hello");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual("Hello World");
  });
});
