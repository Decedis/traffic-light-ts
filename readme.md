# Traffic Light

In this assignment we will be building traffic lights in order to practice using react state.

Let's get this show on the road! ( pun intended )

| 🔴 | 🔴 |

| 🟡 | 🟡 |

| 🟢 | 🟢 |

## Learning Objectives

In order to complete this assignment, a student should be able to...

- work with state inside of a single isolated component
- use `onClick` handlers to trigger state changes
- understand what state is and why we use it
- use conditional rendering

## In order to pass this assignment you should

Note:
_You can copy and paste these checklists into your new repository and fill them out to make sure that you solved everything we are asking for_

### Standard Requirements

- [] Setup eslint
- [] Pass all linting checks
  - To check if linting passes, run `npm run lint`
- [] Format code with prettier
- [] State should not be duplicated
- [] Variables should be named logicially
- [] No unneccessary console logs
- [] No commented out blocks of code (Code comments are fine)
- [] Setup a github repository with your submission as the `main` branch, you will submit a link to this for grading (NOT A ZIP FILE)

### Typescript Specific Requirements

- [] pass **ALL** typechecks
  - Check by running `npm run typecheck`
- DON'T USE `any`.... OR ELSE
- Keep your types clean and in a logical location
  - Prop Types for components should be colocated with their components
  -

### Assignment Specific Requirements

- [] The state of a traffic light should go in the following order and repeat indefinitely
  - Red, Green, Yellow
  - If the color is red, and you click `nextState`, the light should change to green
  - If the color is green, and you click `nextState`, the light should change to yellow
  - If the color is yellow, and you click `nextState`, the light should change to red
- [] The correct circle should correspond with the correct position
  - red light should be the top light
  - yellow light should be the middle light
  - green light should be the bottom light
- [] Next State button should go to the next state on the functional traffic light
- [] Next State button should go to the next state on the class based traffic light
