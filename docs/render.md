# Deploying on Render

## 1. Intro to Render

Log in to [Render Dashboard](https://dashboard.render.com/) with Emory Hacks' Google account (contactemoryhacks@gmail.com).

All websites are grouped within the "Websites" project.

![Project Websites](/assets/images/render-project-websites.png)

As you can see, the icon and region of 2025 Spring and 2025 Fall websites are different because one is a static and the other is a dynamic website. In Render, static websites are referred to as "Static Site", and dynamic websites are referred to as "Web Service".

Static websites are hosted on a [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) (Content Delivery Network) and therefore lives in multiple locations around the world (hence region: Global). Dynamic websites are hosted on a single server and lives in a single location (hence region: Oregon).

Websites are automatically built and deployed when a new commit is pushed to the corresponding branch of the repository.

## 2. Deploy a New Website

To deploy a new website, follow these steps:

1. Create a new branch on GitHub and push the website code to the branch.
2. 

## 1. Render Blueprint

[`render.yaml`](/render.yaml) is a list of 

