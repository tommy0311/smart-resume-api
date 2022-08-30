const express = require('express')
const router = express.Router()

const userController = require('../../controllers/apis/user-controller')
const resumeController = require('../../controllers/apis/resume-controller')

const { apiErrorHandler } = require('../../middleware/error-handler')

router.get('/resumes/technologies', resumeController.getTechnologies)
router.get('/resumes/:id', resumeController.getResume)
router.put('/resumes/:id', resumeController.putResume)
router.get('/resumes', resumeController.getResumes)

router.use('/', apiErrorHandler)

module.exports = router
