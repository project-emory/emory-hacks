# Developer Docs

## 1. Branches

### The `main` Branch

The `main` branch is the entry point to our repository. It contains the introduction to the Emory Hacks initiative, technical documentation, and the [blueprint](/render.yaml) for website deployment. This branch should only contain what's applicable to any year of event, and it is not intended to host any website or event-specific content.

### Naming Convention

Every year's (or semester's) website is stored in its own branch, named `<year>/<semester>` (e.g., `2025/fall`). Even if the event is held once in the year, it is highly encouraged to specify the semester for consistency with our naming convention.

Subbranches like feature or bugfix branches should be named `<year>/<semester>/<feature|fix>/<description>` (e.g., `2025/fall/feature/add-registration-page`).
After these branches have been merged, they should be deleted to keep the repository clean.

## 2. Development & Deployment

The choice of web framework is up to the developer. However, it is highly encouraged to use [Next.js](https://nextjs.org/) since the first two websites were built with it, establishing a precedent.

Our deployment platform, [Render](https://render.com/), has support for various web frameworks and guidelines specific to each framework. To list a few:

- [Next.js](https://render.com/docs/deploy-nextjs-app)
- [Vue.js](https://render.com/docs/deploy-vue-js)
- [Create React App](https://render.com/docs/deploy-create-react-app)
- [SvelteKit](https://render.com/docs/deploy-sveltekit)

### Why [Render](https://render.com/)?

[Render](https://render.com/) has been chosen as our hosting platform for the following reasons:

- **Free Tier**: Render offers a free tier that is sufficient for our needs.
  - Why not Vercel? Vercel's free tier is limited to personal GitHub accounts. Since Emory Hacks is an organization account, we cannot use Vercel's free tier.
- **Ease of Use**: Render provides a straightforward deployment process and UI, making it easy to manage our websites.
- **Great CI/CD Experience**: Render has a great CI/CD experience revolving around the [blueprint file](https://render.com/docs/infrastructure-as-code), which is easy enough for students to understand and modify. This can be a great first experience for students to learn about CI/CD.

### Static vs. Dynamic

Render supports both static and dynamic websites. Precedents of both types have been set in the past:

- **Static**: the [2025 Spring Website](emory-hacks-2025-spring.onrender.com)
- **Dynamic**: the [2025 Fall Website](emory-hacks-2025-fall.onrender.com)

In a nutshell, static websites do not interact with a user in a way that requires server-side processing or making a request to a server. Their contents are pre-rendered and served as-is. Dynamic websites, on the other hand, can perform actions contigent on user input, such as submitting a form or interacting with a database.

Our 2025 Spring website relied on a third-party service [Luma](https://lu.ma/) for event registration, removing the need for a dynamic website. However, our 2025 Fall website included a custom registration form that used Google Sheets as a database, requiring a dynamic website to handle form submissions and data processing.

### The Blueprint

[`render.yaml`](/render.yaml) is the blueprint file for our Render deployment. It is a way of telling Render how to build and deploy our website. It contains the configuration for each website, including the build command, start command, and environment variables. Refer to the [Render documentation](./render.md) for a detailed guideline on how to use the blueprint file.
