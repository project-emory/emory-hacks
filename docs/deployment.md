# CI/CD

## GitHub Actions

Each year's website is deployed using GitHub Actions. The workflow is defined in the `.github/workflows/deploy.yml` file.

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

3. Commit and push the changes to the `deploy.yml` file.
4. Continue building the new website on the new branch.
