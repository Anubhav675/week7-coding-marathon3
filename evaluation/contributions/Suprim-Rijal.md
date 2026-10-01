# Contributions – Suprim Rijal

## My role in the group
I worked mainly on the **frontend** (React). In Part A, I built and fixed the pages that show the vehicle rentals. In Part B, I made the Signup page and helped connect the frontend to the login system. At the end, I worked on bringing all parts together, fixing bugs, testing the app, and deploying it to Render with the Swagger documentation.

## Branches I created
- `suprim-frontend` – Part A frontend pages and fixes
- `suprim-2-frontend` – Part B Signup page and fixes

## Part A – Frontend V1

| Commit | What I did |
|---|---|
| `d28fdea` Home page: error handling | Home page fetches all rentals, shows "Loading..." and an error message if the request fails |
| `521de1f` Rental page UI / input fields | Vehicle rental details page: shows all the fields (model, category, price, agency, location, insurance, dates) |
| `09fb2c8` Further error handling of the pages | Error handling on the details page, plus Edit and Delete actions |
| `4233937` Imports changes in the frontend | Fixed the wrong import in `App.jsx` that broke the build (`VehicleRentalsPage` → `VehicleRentalPage`), made the routes match (`/vehicle-rentals/:id`), fixed the empty link in the rental card, fixed the Home page (missing `[]` in `useEffect` caused an endless loop, and the list was not passed to the component), and cleaned up the Add/Edit pages and CSS |
| `ebbe98f` Add the gitignore and final changes | Added `.gitignore` files so `.env` (passwords) and `node_modules` are not pushed |

**Pull requests:**
- PR #7 – `suprim-frontend` → `main` (Home page and details page)
- PR #8 – `suprim-frontend` → `main` (build fix, routing, listing and Home page fixes)

## Part B – Frontend V2

| Commit | What I did |
|---|---|
| `2cb0b6d` Signup Page integration | Created `SignupPage.jsx` with all the User fields (name, username, password, phone number, license number, date of birth, and the nested `address`: license expiry date, city, years of experience). It sends the data to `/api/auth/signup`, saves the token in `localStorage`, and logs the user in |

**Pull requests:**
- PR #10 – `suprim-2-frontend` → `main` (Signup page)

I also worked together with the team on the Navbar (showing Login/Signup or Logout depending on login) and the Add Rental page (sending the token in the `Authorization` header).

## Integration, testing and deployment
- Found and helped fix bugs after merging: the backend crash on startup, the wrong auth URL (`/api/users` vs `/api/auth`), routes that were not protected, and the missing `/signup` route
- Tested the API by hand (signup, login, and requests with and without a token) and checked the backend tests
- Set up the MongoDB Atlas database and deployed the full-stack app to Render
