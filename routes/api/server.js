const express = require('express');
const router = express.Router();

const { timestamp } = require("../../utils/helper");

const Service = require("../../models/Service");
const mongoose = require('mongoose');

/**
 * @api {post} /api/v1/registration Register new Service for watching
 * @apiName Register Service
 * @apiGroup Service
 *
 * @apiVersion 1.0.0
 *
 * @apiParam (Body) {String} title Title of web site.
 * @apiParam (Body) {String} email Notification Email.
 *
 * @apiParamExample {json} Body:
 *      {
 *        "title": "google.com",
 *        "email": "example@example.com"
 *      }
 *
 * @apiSuccess {String} success indicates the status of procedure.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "success"
 *     }
 *
 *
 * @apiErrorExample UserAlreadyExists:
 *     HTTP/1.1 403 Error
 *     {
 *       "message": "Error message."
 *     }
 */
router.post('/', async (req, res) => {
  try {
    const { title, email } = req.body;

    // Create new Service with new url
    const service = new Service({
      _id: new mongoose.Types.ObjectId(),
      title,
      email,
      status: 'success'
    });
    await service.save();

    res.status(200).send({ data: service });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
