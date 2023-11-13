
import { getProducts } from "./index";

interface IProduct {
    id: number;
    name: string;
    price: number;
}

interface IResponse {
    data?: IProduct[];
}

describe("getProducts", () => {
    it("should fetch products from the API", async () => {
        const page = 1;
        const rows = 10;
        const response: IResponse = await getProducts(page, rows);
        expect(response).toBeDefined();
        expect(response.data).toBeDefined();
        expect(response.data?.length).toBe(rows);
    });
});
