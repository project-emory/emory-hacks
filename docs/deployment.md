# Development

## Web Framework

Future websites are highly encouraged to be built using Next.js, for the best compatibility with the deployment process.
If you absolutely want to build in a different framework, it is best to create a new repository other than this one. It's because the current deployment automation is only tailored to Next.js applications, and creating a new deployment process will most likely undeploy all the previous websites. GitHub Pages only support one branch to be deployed, which is the `gh-pages` branch for our project.

## GitHub Actions

Each year's website is deployed using GitHub Actions. The workflow is defined in the `.github/workflows/deploy.yml` file.
This is how the workflow works:

1. The workflow exports the Next.js project as a static site by running `npm run build` on the specified branch.
2. The build output is then copied to the `gh-pages` branch.
3. The `gh-pages` branch is where all the build outputs from previous years are stored and deployed.

## Deploying Future Websites

To deploy a new website for a new year, follow these steps:

1. Create a new branch for the new year's website, with a name of that year (e.g. `2027` for the year 2027).
2. In the `main` branch, update the `deploy.yml` workflow to include the new year's website.
  At the top of the file, you can find a code that defines when to trigger the workflow. The workflow is triggered on every commit to any branch except `gh-pages` and `main`. Therefore, any changes you make in the new branch will automatically run this workflow.
  This workflow can also be triggered manually from the Actions tab on GitHub. To enable this for the new branch, add the branch name to the `options` array of `workflow_dispatch`.
  ```yaml
  on:
  # Runs on pushes targeting any branch matching the pattern
  push:
    branches-ignore:
      - "gh-pages"
      - "main"

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
    inputs:
      branch:
        description: "Branch to deploy"
        required: true
        default: "2026"
        type: choice
        options:
          - "2025"
          - "2026"
          - "2027" # new branch added here
  ```
3. Modify the `PRIMARY_BRANCH` variable in the `deploy.yml` file to match the most recent branch name.

  ```yaml
  jobs:
    # Build job
    build:
      runs-on: ubuntu-latest
      env:
        PRIMARY_BRANCH: "2026" # Branch that root path will redirect to
  ```
  Here, instead of `2026`, assign the variable `PRIMARY_BRANCH` to the new branch name (e.g. `2027`).

3. Commit and push the changes to the `deploy.yml` file.
4. Continue building the new website on the new branch.
