# Volvo Cars (Global Online Digital)
## Front-end coding test (React)

### Objectives
Recreate a responsive carousel from a mock using Next.js and Typescript


[Live Demo](https://god-frontend-code-test-aleksmarinova.vercel.app/)
## Technologies 
- Typesctipt
- Next.js
- VCC-UI
- Embla Carousel

## Reflections
It was interesting working with VCC-UI library and implementing Embla carousel with Typescript. I would have liked to build a custom carousel component, but due to time constraints and Embla being React and Typescript friendly, it didn't seem necessary.
Since Webpack bundles the json file at build time, there was no need to use GetStaticProps.

The size of the project didn't justify the usage of state managers, so I chose to prop drill state from CarsContainer to the individual car cards.
I built my own card component because the Card element from VCC-UI was not built using semantic HTML, which was one of the requirements.

I also used an Icon for the arrow link, because the arrow property on the VCC Link component had some extra whitespace that was breaking the design.

Overall, the code structure is reusable and browser support is carried to all browsers.
