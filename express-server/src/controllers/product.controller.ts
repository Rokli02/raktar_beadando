import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import { Controller } from "./controller";

export class ProductController extends Controller {
    repository = getRepository(Product);

    getAll = async (req, res) => {
        try {
            const entities = await this.repository.find({relations: ["requiredProducts"]});
            res.json(entities);
        } catch(err) {
            res.status(500).json({message: err.message});
            console.log(err);
        }
    };

    //SAJÁT CREATE METÓDUS, ahol külön beilleszti a szükséges alkatrészeket és termékeket!
}