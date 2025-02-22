## Getting started

### To download the HubSpot CMS Boilerplate using the HubSpot CMS CLI:

Before getting started, you will need to have [Node.js](https://nodejs.org) installed, the [HubSpot CMS CLI](https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development#install-dependencies) installed, and we strongly suggest that you set up a [HubSpot CMS Developer Sandbox](https://offers.hubspot.com/free-cms-developer-sandbox) for your QA/testing environment.

1. Navigate to the directory that you want to use for your project
2. Run `hs create website-theme <directory>` to create a project from the HubSpot CMS Boilerplate
3. [Configure](https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development#configure-the-local-development-tools) the local development tools for the portal(s) you'd like to use for your project.
4. Run `hs watch --portal=<portal> src <directory> --initial-upload` to upload all the files in the project and [watch for changes](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cms-cli#watch) to files in the `src` directory

Please reference our _[Quick start guide to developing on the HubSpot CMS](https://developers.hubspot.com/docs/cms/guides/getting-started)_ and our _[Getting started with local development](https://designers.hubspot.com/tutorials/getting-started-with-local-development)_ articles for more information.

### To use version control in your project using GitHub and GitHub Actions:

1. [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the HubSpot CMS Boilerplate repository and [clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) your forked repository to your computer
2. [Set up GitHub secrets in your forked repository to encrypt sensitive information from showing publically](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) for `HUBSPOT_PORTAL_ID` and `HUBSPOT_PERSONAL_ACCESS_KEY`
3. Update the name of the directory that you'll be deploying to in your Design Manager in the `.github/workflows/deploy.yml` file (the current default `dest_dir` is `cms-theme-boilerplate`)
4. Deploy changes to your Design Manager by pushing to the `main` branch of your forked repository

Please reference our [_HubSpot CMS deploy GitHub action page_](https://github.com/marketplace/actions/hubspot-cms-deploy) and _[Setting up continuous integration with a GitHub repository using GitHub Actions article](https://designers.hubspot.com/tutorials/github-integration)_ for more information.

## Style guide

For details about the HubSpot CMS Boilerplate's recommended best practices and code formatting, please reference our [style guide](https://github.com/HubSpot/cms-theme-boilerplate/blob/master/STYLEGUIDE.md).
