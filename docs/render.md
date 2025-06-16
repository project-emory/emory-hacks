# Deploying on Render

## 1. Intro to Render

Log in to [Render Dashboard](https://dashboard.render.com/) with Emory Hacks' Google account (<contactemoryhacks@gmail.com>).

All websites are grouped within the "Websites" project.

![Project Websites](/assets/images/render-project-websites.png)

As you can see, the icon and region of 2025 Spring and 2025 Fall websites are different because one is a static and the other is a dynamic website. In Render, static websites are referred to as "Static Site", and dynamic websites are referred to as "Web Service".

Static websites are hosted on a [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) (Content Delivery Network) and therefore lives in multiple locations around the world (hence region: Global). Dynamic websites are hosted on a single server and lives in a single location (hence region: Oregon).

Websites are automatically built and deployed when a new commit is pushed to the corresponding branch of the repository.

## 2. Deploy a New Website

To deploy a new website, follow these steps:

### 1. Create a New Website Branch

Create a new branch on GitHub and push the website code to the branch.

Make sure the website code is in the root directory of the branch. In case of Next.js, you can use `npx create-next-app@latest ./` command to create a new Next.js app in the current directory.

### 2. Update the Render Blueprint

Go to the `main` branch and find the [`render.yaml`](/render.yaml) file. The configuration for static and dynamic websites are different. The following are instructions for websites built with Next.js. To use a different framework, please refer to the Render documentation.

#### Static Website

If you're deploying a static website and using Next.js, you need to ensure that the `next.config.js` file is set up to export a static site. You can do this by adding the following line to your `next.config.js` (or `next.config.mjs`, `next.config.ts`, etc.) file:

```javascript
module.exports = {
  // Other configurations...
  output: 'export',
  images: {
    unoptimized: true, // This is important for static export
  },
};
```

Then, you can add the following configuration to the `render.yaml` file:

```yaml
  - type: web
    name: emory-hacks-<year>-<semester> # Replace year and semester with the correct year and semester of the new website
    runtime: static
    repo: https://github.com/project-emory/emory-hacks
    branch: "<branch_name>" # Replace this with the correct branch of the new website
    buildCommand: npm ci; npm run build
    staticPublishPath: out
    autoDeployTrigger: commit
```

#### Dynamic Website

```yaml
  - type: web
    name: emory-hacks-<year>-<semester> # Replace year and semester with the correct year and semester of the new website
    runtime: node
    repo: https://github.com/project-emory/emory-hacks
    branch: "<branch_name>" # Replace this with the correct branch of the new website
    plan: free
    region: oregon
    buildCommand: npm ci; npm run build
    startCommand: npm start
    autoDeployTrigger: commit
```

Paste the new configuration at the end of the `render.yaml` file, and make sure to replace the placeholders with the correct values.

### 3. Commit and Push the Changes

After updating the `render.yaml` file (and the Next.js config file if you're building a static site), commit the changes and push.

Now, Render will automatically detect the changes and deploy the new website. You can check the deployment status on the Render Dashboard. By default, the new service may be ungrouped, and you can move it to the "Websites" project for better organization.

From now on, any new commits to a website branch will trigger a new deployment of the website. You can check the deployment status on the Render Dashboard.

