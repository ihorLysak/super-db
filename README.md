# STEPS TO RUN

1. create a postgreSQL database named 'superheroes', it can be easily done using pgAdmin client.
2. run npm install inside of backend and frontend folders.
3. after running npm install for backend, execute `npx knex migrate:latest` to apply migrations to the superheroes database.
4. create an .env file inside of backend folder and add variables to it as shown in .env.example file.
5. Inside of backend folder, start the dev server with `npm run start`, then start the frontend of the application with executing `npm run dev` inside of frontend folder.

# POTENTIAL IMPROVEMENTS

- If any filtering/sorting is to be added to the application, the get method of superheroes endpoint has to be changed to accomodate the sorting/filtering functionality (maybe something like a switch statement that adds functions to knex builder chain based on provided filter/sort options).
- migration files end knexfile are written in js, it would be nice to have an ability to write them in ts.
- Current implementation deals with pagination on frontend. It is fine for now, but since the number of superheroes in DC and MARVEL universes alone is somewhere around 100,000, it might take a lot of time to fetch all of the entities to the client to handle pagination, filtering sorting and whatnot on the client side in the future. One approach to deal with it is to fetch a single page (5 items) at a time with an offside value provided by the client, but this solution complicates filtering, sorting and pagination since we'll have to handle the client state on server (among other complications, this means that the backend API will not be RESTful).
