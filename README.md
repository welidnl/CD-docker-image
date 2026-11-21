# cicd-docker-image

This is a Workflow I built that demonstrates how you can use Continuous Integration and Continuous Deployment to build and push an Image to a container registry (in this case Docker Hub). 

## What the Project Does:

Whenever code is pushed to the main branch an automated workflow runs to:

1. **Set up and check the code**: Installs Node on the runner and prepares the app.
2. **Build & Deploy**: Packages the Node application into a Docker container and uploads it to Docker Hub.

## Repository Structure:

```text
.
├── .github/
│   └── workflows/
│       └── docker.yml      # CI/CD workflow
├── app_flask/
│   ├── Dockerfile          # Image definition
│   └── rock-game.js        # Rock, Paper, Scissors app
└── README.md
```

## How the Workflow Works:

1. **Checkout**: pulls the repository code onto the runner.
2. **Set up Node**: installs Node 20.
3. **Log in to Docker Hub**: authenticates using repository secrets.
4. **Build and push**: builds the image from `app_flask/` and pushes it to Docker Hub.

## Required Secrets:

Add these under **Settings → Secrets and variables → Actions**:

## Running the Image Locally:

```bash
docker pull welidnl/workflow-repo:v1.0
docker run --rm welidnl/workflow-repo:v1.0
```

## Technologies used:

GitHub Actions, Docker, Docker Hub, Node.js