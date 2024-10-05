Step 1: 
 Initialise NPM npm init
 Install all the dependencies npm i
 Set all your application related files.
 Run it Locally

Step 2:
 npm init playwright@latest
 Write the test files
 Run it locally

Step 3:
 Create a repo in GitHub
 git init
 git add .
 git commit -m "First Commit"
 git remote add origin https://github.com/Abishek-GH/CI_CD-Pipeline-Setup.git
 git branch -M Main
 git push -u origin Main

Step 4:
 Deploy Application (AWS)
 Create EC2 Instance (Ubuntu, Allow Port 3000 in Inbound Rules, All all type of traffic)
 Create a new KeyPair (.pem file)
 Launch Instance
 Edit Security group and Allow (Custom TCP, 3000, Ipv4 Anywhere)


Step 5: 
 Connect EC2 using Instace Connect (CloudShell)
 ssh -i "C:/Users/abish/Downloads/your-key-file.pem" ubuntu@your-ec2-public-ip (Public Ip is displayed on EC2 Instance)
 sudo apt update
 sudo apt install nodejs npm git
 git clone https://github.com/your-username/your-repo.git
 ls
 cd your-directory(Repo-Name)
 npm i
 npx playwright install
 sudo npx playwright install-deps (TO install few other dependcies)

Step 6:
 Run Your APplication from AWS on the Public IP
   - Start your app using Node.js or PM2:
     node app.js
     or 
     sudo npm install -g pm2 (To run even if you are signed out)
     pm2 start app.js
     Check if its running (http://3.82.9.161:3000/)

    Resolve Sharp Module Error (if encountered):
   - If you get an error related to **sharp**, follow these steps:
     - Install sharp with optional dependencies:
       ```bash
       npm install --include=optional sharp
       ```
     - Rebuild sharp:
       ```bash
       npm rebuild sharp --force
       ```
     - Clear npm cache and reinstall:
       ```bash
       npm cache clean --force
       rm -rf node_modules
       npm install
       ```
     - Install necessary build tools:
       ```bash
       sudo apt-get install build-essential libvips-dev

Step 7:
  Create a .yml file with required configuration
  inside .github/workflows/
Step 8:
 Run the bvelwo command in command prompt 
  ssh-keygen -t rsa -b 4096 -C "abishek0149@gmail.com" 
  Or This 
    ssh-keygen -t rsa -b 4096 -f C:\Users\abish\.ssh\id_rsa_github -C "abishek0149@gmail.com"
    (Three times Snter, For File Path chekc and Passphrase)
  (If encountered Error saying No Directory Exist, Delete the .ssh folder an run the below command)
  mkdir C:\Users\abish\.ssh

type C:\Users\abish\.ssh\id_rsa_github.pub (TO view the key and copy it)

ssh -i "C:/Users/abish/Downloads/CI_CD.pem" ubuntu@3.82.9.161

nano ~/.ssh/authorized_keys
Now remove everything and paste the public key copied above
Use right click and paste

ctrl x
y
Enter

Now copy the private kye
type C:\Users\abish\.ssh\id_rsa_github



Add the private key to GitHub Secrets:

Go to your GitHub repository.
Navigate to Settings > Secrets and Variables > Actions.
Click New Repository Secret.
Name the secret EC2_SSH_KEY.
Paste the private key content you copied and save it.

Setup YAML File 

Push the code

Run git pull in aws


Now to test go to Github 
Repo
Actions
Push ANything

Check Logs



