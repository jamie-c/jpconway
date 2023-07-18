---
title: "From Vanilla to Next"
date: 2023-07-25
---

This site is now a react app.

The original version was written in plain html and css. My intention was to put into practice what we have covered within the OKCoders bootcamp. So this site is the fruit of that labor.

I started a git repo, and pushed it to github. Using the github pages feature, it was published to the world wide web!

For the second version of this site, I switched from using separate html files containing all blog posts, to a single javaScript file containing an array of objects with all the blog post info. Vanilla javascript was used to get all the data from the array and display the relevant info on the posts page.

The third version went to react, which I did not fully build out, because I decided to learn Next.js and implement this site using that framework.

So what you are reading now is the fourth implementation of jpconway.com. I switched the hosting from github pages to vercel to experiment with server and client code.

For the blog posts, I also drastically change how that is implemented. All posts are now a folder of markdown files. I wrote a javaScript module to parse the folder, getting the filenames and content, and generate the html for each post. The info is also used to build the '/posts' page and all routes at build time. The benefit of Next.js building static pages from the content is that the site actually works without javascript enabled on the client as everything is rendered during build, compared to the first javascript version, which would show no content on the '/posts' page without javascript enabled on the client.

Here's a summary of the key stages in the evolution of jpconway.com:

## Initial version (HTML and CSS):

-   A basic website built using plain HTML and CSS.
-   Created as a practice project during the OKCoders bootcamp.
-   Hosted on GitHub Pages for easy deployment.

## Second version (Vanilla JavaScript):

-   Transitioned from separate HTML files to a single JavaScript file containing an array of objects with blog post information.
-   Utilized vanilla JavaScript to dynamically display blog post content on the posts page.
-   Likely continued to use GitHub Pages for hosting.

## Third version (React):

-   Rebuilt the site using the React framework.
-   Partially implemented React version.
-   Explored and learned Next.js, a popular framework built on top of React.

## Fourth version (Next.js with Markdown-based content):

-   Migrated the site to Next.js, taking advantage of server-side rendering and other benefits offered by the framework.
-   Adopted a new approach for blog posts using Markdown files.
-   Created a JavaScript module to parse the Markdown folder, extract filenames and content, and generate HTML for each post.
-   Utilized Next.js to build static pages from the content during the build process.
-   Switched hosting from GitHub Pages to Vercel to experiment with server and client code.

By leveraging Next.js and implementing server-side rendering with Markdown files, you've enhanced the site's performance and accessibility. The content is now available even without JavaScript enabled on the client side, providing a more inclusive user experience.
