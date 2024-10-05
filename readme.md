Here's your result.

# CI/CD Pipeline Setup

## Step 1: Initialize NPM
    1. Run the following command to initialize your project:
        npm init
    2. Install all the necessary dependencies:
        npm install
    3. Set up all your application-related files.
    4. Run your application locally to ensure it works correctly.


## Step 2: Set Up Playwright
    1. Initialize Playwright by running:
        npm init playwright@latest 
    2. Write your test files as needed.
    3. Run your tests locally to verify their functionality.


## Step 3: Create a GitHub Repository
    1. Initialize Git in your project directory:
        git init
    2. Add all files to the staging area: 
        git add . 
    3. Commit the changes with a message: 
        git commit -m "First Commit" 
    4. Add the remote repository: 
        git remote add origin <https://github.com/YourUsername/YourRepo.git>
    5. Rename the default branch to "main":
        git branch -M main
    6. Push the changes to GitHub: 
        git push -u origin main


## Step 4: Deploy Application on AWS
    1. Create an EC2 Instance:
        - Select an Ubuntu AMI.
        - Allow Port 3000 in Inbound Rules.
        - Enable all types of traffic as required.
    2. Create a Key Pair:
        - Generate a new KeyPair and save the `.pem` file securely.
    3. Launch the Instance.
    4. Edit Security Group:
        - Allow Custom TCP traffic on port 3000 and set the source to "Anywhere" (IPv4).


## Step 5: Connect to EC2 Instance
    1. Connect to your EC2 instance using Instance Connect or SSH:
        ssh -i "Path/To/Your-Key-File.pem" ubuntu@Your-EC2-Public-IP
    2. Update package lists and install necessary packages:
        sudo apt update
        sudo apt install nodejs npm git
    3. Clone your GitHub repository:
        git clone <https://github.com/YourUsername/YourRepo.git>
    4. Navigate to your project directory:
        ls
        cd YourDirectoryName
    5. Install dependencies:
        npm install
    6. Install Playwright:
        npx playwright install
    7. Install additional dependencies (if needed to install any dependencies):
        sudo npx playwright install-deps


## Step 6: Run Your Application on AWS
    1. Start your application using Node.js:
    or install PM2 to keep your application running (Even when signed out):
        node app.js
        sudo npm install -g pm2
        pm2 start app.js
    - Persistence: PM2 keeps the application running in the background even if the terminal is closed, while `node app.js` does not.
    - Management: PM2 provides additional features like monitoring and automatic restarts, whereas using Node.js directly is more straightforward but lacks those capabilities.
    1. Check if your application is running by accessing it at http://Your-Public-IP:3000.
    ### Resolve Sharp Module Error (if encountered)
    If you encounter an error related to **sharp**, follow these steps:
    1. Install sharp with optional dependencies:
        npm install --include=optional sharp
    2. Rebuild sharp:
        npm rebuild sharp --force
    3. Clear npm cache and reinstall dependencies:
        npm cache clean --force
        rm -rf node_modules
        npm install
    4. Install necessary build tools:
        sudo apt-get install build-essential libvips-dev


## Step 7: Create GitHub Actions Workflow
    1. Create a `.yml` file with the required configuration inside the `.github/workflows/` directory of your repository.


## Step 8: Generate SSH Key
    1. Run the following command in the command prompt:
    Without `-f` option: If you do not specify a file path with `-f`, the SSH key pair will be saved in the default location (`~/.ssh/id_rsa` for the private key and `~/.ssh/id_rsa.pub` for the public key).
        ssh-keygen -t rsa -b 4096 -C "YourEmail@example.com"
        or:
        `-f Path/To/YourKeyFile`: This option specifies the file path and name where the generated SSH key pair will be saved. 
        ssh-keygen -t rsa -b 4096 -f Path/To/YourKeyFile -C "YourEmail@example.com"
        *(Press Enter three times for the default file path and no passphrase).*
    2. If you encounter an error saying "No directory exists," navigate to the .ssh folder and delete it manually, then create the `.ssh` folder using the below command:
        mkdir Path/To/.ssh
    3. View and copy your public key:
        type Path/To/id_rsa_github.pub
    4. Connect to your EC2 instance:
        ssh -i "Path/To/YourKeyFile.pem" ubuntu@Your-Public-IP
    5. Edit the authorized keys file:
        nano ~/.ssh/authorized_keys
        - Remove existing content and paste the copied public key using right-click and clicking paste.
        - Save and exit by pressing `CTRL + X`, then `Y`, and `Enter`.
    6. Copy your private key:
        type Path/To/id_rsa_github


## Step 9: Add Private Key to GitHub Secrets
    1. Go to your GitHub repository.
    2. Navigate to **Settings > Secrets and Variables > Actions**.
    3. Click **New Repository Secret**.
    4. Name the secret `EC2_SSH_KEY`. (Must use the same name in the yaml file)
    5. Paste the content of the private key and save it.

## Step 10: Set Up YAML File
    Configure your GitHub Actions YAML file with necessary environment variables and scripts.

## Step 11: Push the Code
    Push your code changes to GitHub.

## Step 12: Test the Setup
    On GitHub, navigate to your repository.
    Click on Actions and push any changes.
    Check the logs to verify that the CI/CD pipeline runs successfully.