# Self-Assessment – Suprim Rijal

## Quality and functionality of my code
My pages work with the API: the Home page lists all rentals, the details page shows every field, and the Signup page creates a user and logs them in. I tried to keep the code simple and easy to read: one `useState` for each input, `try/catch` around every `fetch`, and clear messages for loading and errors.

Some of my first versions had bugs: a wrong import name that broke the build, an empty `<Link>`, and a `useEffect` without `[]` that fetched data again and again. I found and fixed them in later commits. I also learned that `npm run dev` can hide problems that `npm run build` shows, so now I always run the build before pushing.

## Challenges and how I solved them
1. **Git problems.** My pushes to `main` were rejected, and once I pushed to a branch name with a typo (`forntend` vs `frontend`). I learned to read the error message carefully, to work on my own branch, to always run `git pull` before starting, and to merge with pull requests instead of pushing to `main`.
2. **Local changes blocking `git pull`.** I had edited files on an old copy of `main`. I saved my work in a backup branch, updated `main`, and then continued on a new branch.
3. **A crash from pasting code into the wrong file.** Router code ended up in the model file and the server crashed. I learned to read a stack trace from the top (the error type) and to check the file name and line number.
4. **Frontend and backend not matching.** The frontend called `/api/users/login` while the task says `/api/auth/login`, and the signup data shape did not match the User model. I learned that the frontend and backend must agree on the URL and the exact shape of the JSON.
5. **Deployment.** I learned how Render builds and starts the app, how to set environment variables (`MONGO_URI`, `SECRET`), and why Atlas needs `0.0.0.0/0` in Network Access.

I used an AI assistant (Claude) to help explain errors and suggest fixes. I made sure I understood each change before using it, and I tested it myself.

## What I learned
- How React pages talk to an API with `fetch`, and how to handle loading and errors
- How login works with JWT: the server gives a token, the frontend saves it and sends it as `Authorization: Bearer <token>`, and middleware protects routes
- How to protect pages in React Router with `Navigate`
- Working in a team with Git: branches, pull requests, and avoiding conflicts
- Why tests matter: they check success cases, errors, and requests with and without a token
- How to deploy a full-stack app to Render and document an API with Swagger
