# Git revert
# read commit hash

CommitDelete(){
    read -p "Enter commit hash: " commitHash
    git reset --hard $commitHash
    git push origin +main
    
}

RepositoryUpdate(){
    #commit message
    read -p "Enter commit message: " commitMessage
    git pull
    git add .
    git commit -m "$commitMessage"
    git push origin +main
}

Menu(){
    echo "1. Commit delete"
    echo "2. Repository update"
    echo "3. Exit"
    read -p "Enter your choice: " choice
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