# STEPS TO RUN

1. create a postgreSQL database named 'superheroes', it can be easily done using pgAdmin client.
2. run npm install inside of backend and frontend folders.
3. after running npm install for backend, execute `npx knex migrate:latest` to apply migrations to the superheroes database.
4. create an .env file inside of backend folder and add variables to it as shown in .env.example file.
5. Inside of backend folder, start the dev server with `npm run start`, then start the frontend of the application with executing `npm run dev` inside of frontend folder.

# POTENTIAL IMPROVEMENTS

- migration files end knexfile are written in js, it would be nice to have an ability to write them in ts.
- Current implementation deals with pagination on frontend. It is fine for now, but since the number of superheroes in DC and MARVEL universes alone is somewhere around 100,000, it might take a lot of time to fetch all of the entities to the client to handle pagination, filtering sorting and whatnot on the client side in the future. One approach to deal with it is to fetch a single page (5 items) at a time with an offside value provided by the client, but this solution complicates filtering, sorting and pagination since we'll have to handle the client state on server (among other complications, this means that the backend API will not be RESTful).
- backend and frontend have shared types. Would be nice to create a root npm package that stores these types and other shared utilities
- Initially i decided to deal with the images using the combination of multer on backend and form data object on frontend, saving the images themselves on the server and urls for these images in the database. Unfortunately, because of how browser safety features work, using the absolute path as an image source does not work. I would usually use something like S3 from AWS to deal with image saving, but my account balance was too low to do it for this test task. Alternative approach would be to try and create my own service to save, store and send images on demand, but unfortunately I ran out of time.
