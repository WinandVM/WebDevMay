InstallGit(){
    echo "Installing Git"
    sudo apt-get install git
    echo "Git installed"
}

# Check if git is installed
if ! [ -x "$(command -v git)" ]; then
    echo 'Error: git is not installed.' >&2
    echo "Installing Git"
    InstallGit
    
    exit 1
fi


GitConfig(){
    # read username
    read -p "Enter your username: " username
    # read email
    read -p "Enter your email: " email
    git config --global user.name "$username"
    git config --global user.email "$email"
}

CommitDelete(){
    read -p "Enter commit hash: " commitHash
    git reset --hard $commitHash
    git push origin +main
    
}

RepositoryUpdate(){
    #commit message with color
    echo -e "\e[1;32mEnter commit message: \e[0m"
    read -p "> " commitMessage
    git pull
    git add .
    git commit -m "$commitMessage"
    git push origin +main
}

Menu(){
    echo -e "\e[1;32m1. Commit delete\e[0m"
    echo -e "\e[1;32m2. Repository update\e[0m"
    echo -e "\e[1;32m3. Exit\e[0m"
    echo -e "\e[1;33mEnter your choice:\e[0m"
    read -p "> " choice
    case $choice in
        1) CommitDelete;;
        2) RepositoryUpdate;;
        3) exit;;
        *) echo "Invalid choice";;
    esac
}

# Menu loop
while true; do
    Menu
done