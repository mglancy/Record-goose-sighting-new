# Record a goose sighting

[Go to the 'Record a goose sighting' exercise](https://record-a-goose-sighting.herokuapp.com/)

This is a fictional service, to help you record any sightings of geese (geese are awesome). It's using the [GOV.UK Design system](https://design-system.service.gov.uk/), which are WCAG 2.1 AA compliant, and benefits from hundreds of hours of work and testing. However, even if you're using a Design System, stuff can still go wrong...

There are places where the Design System is misused, misimplemented or misunderstood. This has caused accessibility issues, which range across code, design and content - because accessibility issues can be introduced by all of these disciplines. As such, anyone is welcome to have a go and use this as an exercise!

## How to use this
The task is to find as many of the accessibility issues in this site as you can in ~20 minutes.

There is a [worksheet](https://record-a-goose-sighting.herokuapp.com/steps/worksheet), and there is also a list of [answers](https://record-a-goose-sighting.herokuapp.com/steps/answers) - but give it the full 20 minutes before you look at the answers first, if you're working through this alone!

If you are running this as a training exercise, there is an [answerless 'Record a goose sighting' exercise](https://record-a-goose-exercise.herokuapp.com), that you can use with attendees. This prevents them from finding answers before you're ready to go through them!

## What testing tools to use
I would recommend working through the site in the following order:

- Can you access everything by pressing the tab key?
- Does WAVE show any errors, or highlight any issues with the HTML structure?
- Does the colour contrast tab on [WAVE](http://wave.webaim.org/) throw up any errors?

Government Digital Services have recently published [how to conduct a basic accessibility audit](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one), which is worth a look at too.

Testing like this is a good way to identify basic accessibility issues. It would not replace an audit against WCAG 2.1 to level AA, and its ~50 criteria. Why still do it? These are tests that are quick to run, and it's easier to fix accessibility issues at the start, rather than the end.

## How to run locally
This is built using the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs). It has been updated to use the kit beyond v13.0 so there are a few breaking changes from previous versions.

To run it locally, clone it down, then follow the instructions in the [prototype kit getting started - advanced guide](https://prototype-kit.service.gov.uk/docs/install/getting-started-advanced).

#### Alternatviely run it via docker & docker-compose
Depends on [docker install](https://docs.docker.com/install/) and [docker-compose install](https://docs.docker.com/compose/install/)
1. `docker-compose build`
2. `docker-compose up`

Or get a bash console where you can run `npm` cmds via the built container (ensure step 1 above is done)
`docker-compose run --rm --service-ports --entrypoint="bash" goose`

Run the tests via docker
`docker-compose run --rm --entrypoint="npm run test" goose`

## Suggesting changes
Feedback is welcome. Either [submit an issue](https://github.com/ministryofjustice/recording-a-goose-sighting/issues), or [leave a PR](https://github.com/ministryofjustice/recording-a-goose-sighting/pulls).

## Resources for further learning
- [Udacity Accessibility course](https://www.udacity.com/course/web-accessibility--ud891) - good for futhering knowledge about writing accessible code
- [GDS WCAG 2.1 Primer](https://alphagov.github.io/wcag-primer/) - good for helping you understand the Web Content Accessibility Guidelines
- [GDS guidance how to conduct a basic accessibility audit](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one) - mentioned above but listed here as well
- [a11y weekly](https://a11yweekly.com/) - a good weekly newsletter about accessibility

Any other suggestions, free free to add them!

## Other versions of the exercise
Since publishing this, a few other organisations have forked it and made their own versions using their own Design Systems. A list of these is below - if you've made one, let me know by raising an issue and I'll add it.

- [NHS Accessibility exercise](https://github.com/nhsuk/accessibility-training)
- [Coop accessibility exercise - 'Report a leaky bag of flour'](https://github.com/coopdigital/return-a-leaky-bag-of-flour)
