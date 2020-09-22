var express = require("express");
var router = express.Router();

var controller = require("../../controllers/hoteliers");
const { validate } = require("../../validators");
const { hotelierId } = require("../../validators/hoteliers");

/**
 * @swagger
 *  /hoteliers:
 *    get:
 *      tags:
 *      - "Hotelier"
 *      summary: "Get all hoteliers"
 *      description: "Use to get all hoteliers"
 *      responses:
 *        '200':
 *          description: "List of all hoteliers"
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /hoteliers/{id}:
 *  get:
 *    tags:
 *    - "Hotelier"
 *    summary: "Get all hotelier items of a given hotelier"
 *    description: "Use to get all hotelier items of the given hotelier id"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id of hotelier
 *        required: true
 *        schema:
 *          type: integer
 *          format: int32
 *    responses:
 *      '200':
 *        description: "List of all hoteliers items of given hotelier"
 *      '400':
 *        description: "Given input has invalid format"
 *      '404':
 *        description: "Given hotelier id is not found"
 */
router.get("/:id", hotelierId, validate, controller.getOne);

module.exports = router;
