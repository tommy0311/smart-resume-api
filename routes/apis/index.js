const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const userController = require('../../controllers/apis/user-controller')
const resumeController = require('../../controllers/apis/resume-controller')

const { authenticated, authenticatedResumeOwner } = require('../../middleware/api-auth')
const { apiErrorHandler } = require('../../middleware/error-handler')

router.get('/resumes/technologies', resumeController.getTechnologies)
router.get('/resumes/:id', resumeController.getResume)
router.put('/resumes/:id', authenticatedResumeOwner, resumeController.putResume)
router.get('/resumes', authenticated, resumeController.getResumes)

router.get('/getCurrentUser', authenticated, userController.getCurrentUser)
router.post('/login', passport.authenticate('local', { session: false }), userController.putlogin)

router.use('/', apiErrorHandler)

module.exports = router
