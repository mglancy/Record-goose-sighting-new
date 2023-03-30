//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Routes for record a goose steps

router.get('steps/start', function(request, response) {
  response.render('steps/start')
})

router.get('steps/geese-liked', function(request, response) {
  response.render('steps/geese-liked')
})

router.get('steps/goose-type', function(request, response) {
  response.render('steps/goose-type')
})

router.get('steps/date-saw-goose', function(request, response) {
  response.render('steps/date-saw-goose')
})

router.get('steps/check-your-answers', function(request, response) {
  response.render('steps/check-your-answers')
})

router.get('steps/end', function(request, response) {
  response.render('steps/end')
})

router.get('steps/worksheet', function(request, response) {
  response.render('steps/worksheet')
})

router.get('steps/answers', function(request, response) {
  response.render('steps/answers')
})

module.exports = router
