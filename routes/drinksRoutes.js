/**
 * @swagger
 * components:
 *   schemas:
 *     Drink:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - imageUrl
 *         - recipe
 *         - isAlcoholic
 *       properties:
 *         name:
 *           type: string
 *           description: name of Drink
 *         description:
 *           type: string
 *           description: description of Drink
 *         imageUrl:
 *           type: string
 *           description: image of Drink
 *         recipe:
 *           type: string
 *           description: recipe of Drink
 *         isAlcoholic:
 *           type: boolean
 *           description: Is Drink Alcoholic ? (Yes/No)
 *       example:
 *         name: Beer
 *         description: Beer is considered to be one of the most popular alcoholic beverages around world.
 *         imageUrl: image.png
 *         recipe: wheat, rye, oats, rice, corn, or sorghum
 *         isAlcoholic: Yes
 */

/**
 * @swagger
 * tags:
 *   name: Drinks
 *   description: Drinks managing API
 * /drink/allDrinks:
 *   get:
 *     summary: Lists all Drinks
 *     tags: [Drinks]
 *     responses:
 *       200:
 *         description: list of Drinks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Drink'
 *
 * /drink/addDrink:
 *   post:
 *     summary: Create a new Drink
 *     tags: [Drinks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Drink'
 *     responses:
 *       200:
 *         description: created Drink.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Drink'
 *       500:
 *         description: Some server error
 *
 * /drink/{id}:
 *   get:
 *     summary: Get Drink by id
 *     tags: [Drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Drink id
 *     responses:
 *       200:
 *         description: Drink response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Drink'
 *       404:
 *         description: Drink was not found
 *   put:
 *    summary: Update Drink by id
 *    tags: [Drinks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Drink id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Drink'
 *    responses:
 *      200:
 *        description: Drink was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Drink'
 *      404:
 *        description: Drink was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove Drink by id
 *     tags: [Drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Drink id
 *
 *     responses:
 *       200:
 *         description: Drink was deleted
 *       404:
 *         description: Drink was not found
 */

const drinksController = require("../controllers/drinksController");

const router = require("express").Router();

const auth = require("../middleware/auth");

router.post("/addDrink", drinksController.addDrink);

router.get("/allDrinks", drinksController.getAllDrinks);

router.get("/:id", drinksController.getOneDrink);

router.put("/:id", drinksController.updateDrink);

router.delete("/:id", drinksController.deleteDrink);

module.exports = router;
