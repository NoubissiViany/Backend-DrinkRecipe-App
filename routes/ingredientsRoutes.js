/**
 * @swagger
 * components:
 *   schemas:
 *     Ingredient:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           description: name of Ingredient
 *         description:
 *           type: string
 *           description: description of Ingredient
 *       example:
 *         name: Malt
 *         description: grain product that is used in beverages and foods as a basis for fermentation
 */

/**
 * @swagger
 * tags:
 *   name: Ingredients
 *   description: Ingredients managing API
 * /Ingredient/allIngredients:
 *   get:
 *     summary: Lists all Ingredients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: list of Ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingredient'
 *
 * /Ingredient/addIngredient:
 *   post:
 *     summary: Create a new Ingredient
 *     tags: [Ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ingredient'
 *     responses:
 *       200:
 *         description: created Ingredient.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       500:
 *         description: Some server error
 *
 * /Ingredient/{id}:
 *   get:
 *     summary: Get Ingredient by id
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ingredient id
 *     responses:
 *       200:
 *         description: Ingredient response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       404:
 *         description: Ingredient was not found
 *   put:
 *    summary: Update Ingredient by id
 *    tags: [Ingredients]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Ingredient id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Ingredient'
 *    responses:
 *      200:
 *        description: Ingredient was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Ingredient'
 *      404:
 *        description: Ingredient was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove Ingredient by id
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ingredient id
 *
 *     responses:
 *       200:
 *         description: Ingredient was deleted
 *       404:
 *         description: Ingredient was not found
 */

const IngredientsController = require("../controllers/ingredientsController");

const router = require("express").Router();

const auth = require("../middleware/auth");

router.post("/addIngredient", IngredientsController.addIngredient);

router.get(
  "/allIngredients",
  IngredientsController.getAllIngredients
);

router.get("/:id", IngredientsController.getOneIngredient);

router.put("/:id", IngredientsController.updateIngredient);

router.delete("/:id", IngredientsController.deleteIngredient);

module.exports = router;
