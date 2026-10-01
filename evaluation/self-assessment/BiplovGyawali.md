# Self-Assessment – Biplov Gyawali

## My code

I worked on the Add and Edit vehicle rental pages. The Edit page loads the selected rental, displays the existing values in the form, and saves changes. The Add page allows users to enter rental information and create a new rental.

For Part B, I added authentication to both pages. The requests include the JWT token in the Authorization header, so the protected Add and Edit operations work for logged-in users.

## Challenges

One challenge was loading existing rental information into the Edit form, especially nested fields such as agency and location. I also needed to handle dates in the correct format for the form.

Another challenge was understanding how the JWT token should be retrieved after login and included in the API request. I solved these by checking the existing project structure and testing the requests step by step.

## What I learned

- How to use `useParams` to get the rental ID from the URL.
- How to use `useEffect` to load data when the page opens.
- How to use `fetch` with `POST` and `PUT` requests.
- How to work with forms and existing data.
- How JWT authentication works between the frontend and backend.
- How to send an authentication token using the `Authorization` header.
- How to work with Git branches, commits, and pull requests in a team project.