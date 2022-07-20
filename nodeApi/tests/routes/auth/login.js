import { expect } from "chai";
import { response } from "express";
import request from "request";
import { TESTING_URL } from "../../../constants/test";

describe("Login API", () => {
  describe("", () => {
    it("Status", (done) => {
      request.get(`${TESTING_URL}/record`, {}, (_, response) => {
        console.log(response);
      });
    });
  });
});
