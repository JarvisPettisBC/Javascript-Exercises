# `units.js.weeks[2].benchmarks[0]`

## Fetching Fake Post Data

For this benchmark, you've been given some starter HTML, CSS, JavaScript, and dummy data to help you build a small blog post viewer page. Your job is to implement the functionality required to dynamically fetch user and post data based off user interactions.

On the provided page, there is a select input for the user to choose which author's posts they would like to read. When the page first loads, you should fetch the list of users and populate the select input with that user data.

When a user chooses an author from that select input, the page should populate the author header with the chosen author's information, load that author's posts, and populate the posts container with those posts.

## Provided Code

The provided HTML and CSS create the base UI for the benchmark.

The provided JavaScript handles most of the DOM manipulation, you are provided several functions that you will need to call to do your job.

The dummy data is provided in the `fake_api` directory.

- `fake_api/users.json` contains an array of the users in the system.
- `fake_api/users/` contains a directory with the id of each user in the system. In each of those user directories (e.g. `fake_api/users/1`) there is a `posts.json` file that contains an array of the posts for that user.

## Rubric

- [ ] Loads user data and populates the user select input.
- [ ] When a new author is selected from the user select input
  - [ ] the author header is populated with their data.
  - [ ] the author's blog posts are loaded and populated into the posts container

**No HTML or CSS should be changed.**

**All provided JavaScript functions should be used.**

**None of the provided JavaScript should be changed.**
