# encore

Encore

## Local Setup

### 1. Setup Node and Yarn

I use [volta](http://volta.sh/) to sync versions of Node and Yarn for this project. Run the following commands:

```bash
volta install node
volta install yarn
```

In case you do not want to use volta just make sure you have the correct version installed. The version is on the package.json

### 2. Install all modules

```bash
yarn
```

### Run the application

Try to run the application using the following command:

```sh
yarn dev
```

### Storybook

Additionally, you might want to run a local instance of the components using Storybook application:

```sh
yarn storybook
```

## Test the application

Please notice that on the page challenge the steps to finish is different for mobile application than desktop application. I follow the mock design but they were different on mobile and desktop for that reason I decide to allow only 3 additional challenges for the mobile version and all challenges needs to be accomplished on desktop version
