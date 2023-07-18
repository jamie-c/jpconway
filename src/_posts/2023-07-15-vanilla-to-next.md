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
