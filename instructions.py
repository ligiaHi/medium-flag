import random
import string

def generate_random_string(length):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

def generate_string_file():
    strings = []
    
    for i in range(400):
        if i == 202:  # Index 202 will have the special string
            strings.append("007{0x6d 0x79 0x6d 0x6f 0x6e 0x65 0x79}")
        else:
            length = random.randint(4,55)
            random_string = generate_random_string(length)
            strings.append(random_string)
    
    with open("string_file.txt", "w") as file:
        for string in strings:
            file.write(string + "\n")

if __name__ == "__main__":
    generate_string_file()
