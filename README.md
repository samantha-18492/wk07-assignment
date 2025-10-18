Requirements:

- Create a client using React.
- Use Express to create your server, using both GET and POST endpoints.
- Build a React form for users to create posts.
- Create multiple pages using React Router.
- Design a database schema, and seed the database with some realistic data.
- Use SQL to retrieve posts from the database in your Express server.
- Display all posts using .map().
- Create dynamic pages using react-router.
- Use react-router to create a dedicated route for the categories
- Create additional SQL queries to show filtered posts (sort by asc / desc)

<img width="3508" height="1517" alt="Image" src="https://github.com/user-attachments/assets/4c487eee-7d55-4d85-876c-cdf2e2a3e0d6" />
Initially, I wanted to create a form where users could submit new destinations. On submission, I wanted the new destination to generate a new card on the homepage so other users could add their comments to the destination. I would have needed to put extra features on the form that meant duplicate cities couldn't be added and it would have been reliant on the user matching the formatting of other destination cards e.g. providing an appropriate image. As you can see from the wireframe, I had intended on having the form to be a separate page in the website. This felt too much of a big task for this week so I decided to re-imagine the project. At first I thought about a discovery type page where a random destination card would be given to the user on the press of a button. This would've been more of an inspiration tool. But I instead decided to use the same format as my week 4 project so a user can navigate to a particular destination and then submit a review from there.

Reflections:

- Reacquainting myself with setting up a server was a challenge after a couple of weeks off! I definitely had to read through my notes again, but we got there. Creating two queries on the same get route was a challenge at first, but I managed to do a bit of digging to figure this out.
- I feel like I'm finally getting to grips with error messages in the console log and figuring out how to resolve these issues. They don't fill me with quite as much dread anymore.
- I found having multiple css sheets overwhelming and I quickly lost track of what styling came from where - particularly styling that cascaded down. In future I should probably limit the amount of files I have or get better acquainted with Tailwind.
- I was pleased to see the return of sql this week, despite not getting a chance to use relational tables.
- I had planned to add a feature on my home page which meant the user could filter by type and duration, but I couldn't get this working, which is really disappointing. I'd like to know how this could be done with my existing code.
- I didn't manage to get the polling working, so I haven't used setInterval or a cleanup function in this project. I will need to revisit this content to make sure I'm confident on applying it in the future.
- I feel like I've achieved a lot on this project, it's certainly taken a lot of patience. However I am a little disappointed that I haven't been able to achieve everything I wanted to.
