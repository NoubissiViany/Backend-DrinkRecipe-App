/**
 * @swagger
 * components:
 *   schemas:
 *     Glass:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: name of Glasses
 *       example:
 *         name: Red Wine Glasse
 */

/**
 * @swagger
 * tags:
 *   name: Glasses
 *   description: Glasses managing API
 * /glass/allGlasses:
 *   get:
 *     summary: Lists all Glasses
 *     tags: [Glasses]
 *     responses:
 *       200:
 *         description: list of Glasses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Glass'
 *
 * /glass/addGlass:
 *   post:
 *     summary: Create a new Glass
 *     tags: [Glasses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Glass'
 *     responses:
 *       200:
 *         description: created Glasses.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Glass'
 *       500:
 *         description: Some server error
 *
 * /glass/{id}:
 *   get:
 *     summary: Get Glass by id
 *     tags: [Glasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Glass id
 *     responses:
 *       200:
 *         description: Glass response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Glass'
 *       404:
 *         description: Glass was not found
 *   put:
 *    summary: Update Glass by id
 *    tags: [Glasses]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Glass id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Glass'
 *    responses:
 *      200:
 *        description: Glass was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Glass'
 *      404:
 *        description: Glass was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove Glass by id
 *     tags: [Glasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Glass id
 *
 *     responses:
 *       200:
 *         description: Glass was deleted
 *       404:
 *         description: Glass was not found
 */

const GlassesController = require("../controllers/glassesController");

const router = require("express").Router();

const auth = require("../middleware/auth");

router.post("/addGlass", GlassesController.addGlass);

router.get("/allGlasses", GlassesController.getAllGlasses);

router.get("/:id", GlassesController.getOneGlass);

router.put("/:id", GlassesController.updateGlass);

router.delete("/:id", GlassesController.deleteGlass);

module.exports = router;
