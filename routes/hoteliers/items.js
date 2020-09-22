var express = require("express");
var router = express.Router();

var controller = require("../../controllers/hoteliers/items");
const { validate } = require("../../validators");
const { hotelierId, hotelierItem, hotelierItemId } = require("../../validators/hoteliers/items");

/**
 * @swagger
 * definitions:
 *   HotelierItem:
 *     type: object
 *     required:
 *       - name
 *       - rating
 *       - category
 *       - image
 *       - reputation
 *       - price
 *       - availability
 *       - hotelierId
 *       - location
 *     properties:
 *       name:
 *         type: string
 *         description: "Minimum length 10 characters"
 *       rating:
 *         type: integer
 *         description: "Between 0 and 5"
 *       category:
 *         type: string
 *         enum:
 *         - "hotel"
 *         - "alternative"
 *         - "hostel"
 *         - "lodge"
 *         - "resort"
 *         - "guest-house"
 *       image:
 *         type: string
 *         description: "Valid image URL"
 *       reputation:
 *         type: integer
 *         description: "Between 0 and 1000"
 *       price:
 *         type: integer
 *       availability:
 *         type: integer
 *       hotelierId:
 *         type: integer
 *       location:
 *         $ref: '#/definitions/Location'
 *
 *   Location:
 *     type: object
 *     required:
 *       - city
 *       - state
 *       - country
 *       - zip_code
 *       - address
 *     properties:
 *       city:
 *         type: string
 *       state:
 *         type: string
 *       country:
 *         type: string
 *       zip_code:
 *         type: integer
 *         description: "Between 10000 and 99999"
 *       address:
 *         type: integer
 */

/**
 * @swagger
 * /hoteliers/items/{id}:
 *  get:
 *    tags:
 *    - "Hotelier Item"
 *    summary: "Get details of given hotelier item"
 *    description: "Use to get details of the given hotelier item"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id of hotelier item
 *        required: true
 *        schema:
 *          type: integer
 *          format: int32
 *    responses:
 *      '200':
 *        description: "Details of the given hotelier item"
 *      '400':
 *        description: "Given input has invalid format"
 *      '404':
 *        description: "Given hotelier item id is not found"
 */
router.get("/:id", hotelierId, validate, controller.getOne);

/**
 * @swagger
 * /hoteliers/items:
 *  post:
 *    tags:
 *    - "Hotelier Item"
 *    summary: "Create new hotelier item"
 *    description: "Use to create new hotelier item"
 *    parameters:
 *      - name: hotelierItem
 *        in: body
 *        description: "Hotelier item object to be saved"
 *        required: true
 *        schema:
 *          $ref: '#/definitions/HotelierItem'
 *    responses:
 *      '201':
 *        description: "The hotelier item is created"
 *      '400':
 *        description: "Given input has invalid format"
 */
router.post("/", hotelierItem, validate, controller.add);

/**
 * @swagger
 * /hoteliers/items/{id}:
 *  put:
 *    tags:
 *    - "Hotelier Item"
 *    summary: "Update existing hotelier item"
 *    description: "Use to update existing hotelier item"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id of hotelier item
 *        required: true
 *        schema:
 *          type: integer
 *          format: int32
 *      - name: hotelierItem
 *        in: body
 *        description: "Hotelier item object to be saved"
 *        required: true
 *        schema:
 *          $ref: '#/definitions/HotelierItem'
 *    responses:
 *      '200':
 *        description: "Details of the given hotelier item"
 *      '400':
 *        description: "Given input has invalid format"
 *      '404':
 *        description: "Given hotelier item id is not found"
 */
router.put("/:id", [...hotelierItemId, ...hotelierItem], validate, controller.modify);

/**
 * @swagger
 * /hoteliers/items/{id}:
 *  delete:
 *    tags:
 *    - "Hotelier Item"
 *    summary: "Delete existing hotelier item"
 *    description: "Use to delete existing hotelier item"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id of hotelier item
 *        required: true
 *        schema:
 *          type: integer
 *          format: int32
 *    responses:
 *      '200':
 *        description: "The hotelier item is deleted"
 *      '400':
 *        description: "Given input has invalid format"
 *      '404':
 *        description: "Given hotelier item id is not found"
 */
router.delete("/:id", hotelierItemId, validate, controller.remove);

/**
 * @swagger
 * /hoteliers/items/{id}/availability:
 *  patch:
 *    tags:
 *    - "Hotelier Item"
 *    summary: "Book hotelier item"
 *    description: "Use to book hotelier item and reduce its availability by 1"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id of hotelier item
 *        required: true
 *        schema:
 *          type: integer
 *          format: int32
 *    responses:
 *      '200':
 *        description: "The hotelier item is booked and its availability is reduced by 1"
 *      '400':
 *        description: "The hotelier item cannot be booked because its availability is zero"
 *      '404':
 *        description: "Given hotelier item id is not found"
 */
router.patch("/:id/availability", hotelierItemId, validate, controller.book);

module.exports = router;
