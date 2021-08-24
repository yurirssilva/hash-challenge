import request from "supertest";
import { app } from "../src/app";


it("Deve responder na raiz", (done) => {
  request(app)
    .get("/")
    .then((res) => {
      expect(res.status).toBe(404);
      done();
    });
});
