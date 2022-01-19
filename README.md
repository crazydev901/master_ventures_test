<p align="center">
  <h1 align="center">
  Master Ventures
  </h1>
</p>

<p align="center">
  <b>
  React - Take Home Test
  </b><br>
</p>

Welcome Candidate and thank you for taking the time to complete the Master Ventures take-home test for our senior frontend engineer position.

You will have **2 days** to complete the assignment. Once you have completed your solution, **PLEASE FOLLOW THE INSTRUCTIONS BELOW:** 

- Clone this Repo, please do not Fork
- Create your own public repo and push the code up to your `new public repository`.
- Make your changes per this tests requirements and push your changes to your new repo.
- Once you are done with the test. Please make sure:
  - All changes have been pushed to your repo.
  - **Please reply via email with a link to the new github repository and instructions on how to install / run the application.**
- **Update this README.md with the instructions to test your solution, create a section titled: `TEST-INSTRUCTIONS`**

The goal of this test is to build out a "Movie Awards 2021" interactive ballot. Please clone this repository and submit it once you are finished.

#### Here are the rules of this test.. you must:
---

 1) Build an application that displays a list of categories and nominees. Please follow the design in the wireframe below. Run the following commands to start the application:
 
 > Install dependencies
 
 ```bash
 npm i
 ``` 
 
 > Run the application
 
 ```bash
 npm run dev
 ```
 
 2) Use the React `useEffect` hook to fetch the ballot data from the provided API (`http://localhost:3000/api/ballots`), and save it to state by using the React `useState` hook.
 
- [useEffect Documentation](https://reactjs.org/docs/hooks-effect.html)
 
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- [useState Documentation](https://reactjs.org/docs/hooks-state.html)

> Get example of ballot data

```bash
curl -X GET \
  'http://localhost:3000/api/ballots' \
  -H 'Accept: */*'
```

 3) When you click on a nominee, we should highlight the nominee card and save the selections using the React `useState` hook. A user can only select one nominee per category, and we should be able to see all of their selections highlighted. The selected nominee card should follow the style guides below.

 4) Make the layout responsive with at least one breakpoint (your choice as to how it looks on a smaller screen width).

 5) Once the user is finished making their selections, they can click on a submit button that displays a results modal screen. A user can dismiss the modal by clicking on the close button (follow the wireframe below).

## Requirements:
 1) All navigation should happen in the same page
 
 2) Demonstrate use of React hooks
 
 3) Demonstrate knowledge of component modularization
 
 4) Utilize CSS to create the layout of the page. Add hover styles to the items the user is interacting with.
 
 5) Create components as you feel is best suited for your solution

## Wireframes

---

![Ballot Wireframe](requirements/take-home-wire.jpg?raw=true "Ballot Wireframe")

---

![Ballot Success Modal Wireframe](requirements/take-home-success.jpg?raw=true "Ballot Success Modal Wireframe")

---

## Bonuses
- Make it pretty

- Make it accessible

- Add unit tests

## Styling Guidelines

- Use the "Roboto" Google font   
- Use the following colors   
	- Page background: - ![#0D2436](https://via.placeholder.com/15/0D2436/000000?text=+) `#0D2436`
	- Default/normal font color: ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF`
  - Hover font color: ![#CCCCCC](https://via.placeholder.com/15/CCCCCC/000000?text=+) `#CCCCCC`
	- Nominee card / submit button background: ![#009B86](https://via.placeholder.com/15/009B86/000000?text=+) `#009B86`
  - Selected Nominee card: ![#009B86](https://via.placeholder.com/15/009B86/000000?text=+) `#009B86`
  - Nominee card background hover / submit button background hover: ![#34AC9C](https://via.placeholder.com/15/#34AC9C/000000?text=+) `#34AC9C`

> **Good luck and if you have any questions, please reach out to us!**

