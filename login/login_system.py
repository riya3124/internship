# Simple Login Authentication System

# User database (in memory)
user_db = {}

def register():
    print("\n--- Register ---")
    username = input("Enter a username: ").strip()
    if username in user_db:
        print("Username already exists. Please try another.")
        return
    password = input("Enter a password: ").strip()
    user_db[username] = password
    print(f"User '{username}' registered successfully!")

def login():
    print("\n--- Login ---")
    username = input("Enter your username: ").strip()
    password = input("Enter your password: ").strip()
    if username in user_db and user_db[username] == password:
        print(f"Welcome back, {username}!")
        secured_page(username)
    else:
        print("Invalid username or password.")

def secured_page(username):
    print("\n--- Secured Page ---")
    print(f"Access granted, {username}. This is the secured page!")

def main():
    while True:
        print("\n--- Authentication System ---")
        print("1. Register")
        print("2. Login")
        print("3. Exit")
        choice = input("Choose an option: ").strip()
        if choice == "1":
            register()
        elif choice == "2":
            login()
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

# Run the program
if __name__ == "__main__":
    main()
