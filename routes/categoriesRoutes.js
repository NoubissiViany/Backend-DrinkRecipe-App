/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           description: name of category
 *         description:
 *           type: string
 *           description: description of category
 *       example:
 *         name: Wine
 *         description: Wine is considered to be the oldest alcoholic beverage in world dating back to 7000-6600 BCE
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: categories managing API
 * /category/allCategories:
 *   get:
 *     summary: Lists all Categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *
 * /category/addCategory:
 *   post:
 *     summary: Create a new Category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 *
 * /category/{id}:
 *   get:
 *     summary: Get Category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Category id
 *     responses:
 *       200:
 *         description: Category response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category was not found
 *   put:
 *    summary: Update Category by id
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Category id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: Category was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      404:
 *        description: Category was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove Category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Category id
 *
 *     responses:
 *       200:
 *         description: Category was deleted
 *       404:
 *         description: Category was not found
 */

const categoriesController = require("../controllers/categoriesController");

const router = require("express").Router();

const auth = require("../middleware/auth");

router.post("/addCategory", categoriesController.addCategory);

router.get(
  "/allCategories",
  categoriesController.getAllCategories
);

router.get("/:id", categoriesController.getOneCategory);

router.put("/:id", categoriesController.updateCategory);

router.patch("/:id", categoriesController.updateCategory);

router.delete("/:id", categoriesController.deleteCategory);

module.exports = router;
