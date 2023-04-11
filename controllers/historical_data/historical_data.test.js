const request = require("supertest")
const app = require("../../index")


describe("GET Historical Data", () => {
    it("should return a historical data of TCS.NS", async () => {
        const res = await request(app).get(
            "/api/v1/historical-data?symbol=TCS.NS&from=2022-04-11&to=2023-04-11&period=w"
        );
        expect(res.statusCode).toBe(200);
        expect(res.body.data.length).toBeGreaterThan(0);
    });
});

describe("GET Historical Data", () => {
    it("should return a historical data of TCS.NS", async () => {
        const res = await request(app).get(
            "/api/v1/historical-data?symbol=TCS.NS"
        );
        expect(res.statusCode).toBe(200);
        expect(res.body.data.length).toBeGreaterThan(0);
    });
});

describe("GET Historical Data", () => {
    it("should return error", async () => {
        const res = await request(app).get(
            "/api/v1/historical-data"
        );
        expect(res.statusCode).toBe(400);
    });
});

describe("GET Historical Data", () => {
    it("should return error", async () => {
        const res = await request(app).get(
            "/api/v1/historical-data?symbol=TCS.NS&period=day"
        );
        expect(res.statusCode).toBe(400);
    });
});

afterAll((done) => {
    app.close(done)
});