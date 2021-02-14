import random

# cleaned up redundancies in original:


def randInt(mini, maxi):
    if maxi < mini:
        return "The max cannot be less than the min. Please enter new values."
    if mini < 0:
        print("Out of range. Default used: (0, yourmax).")
        mini = 0
    if maxi > 100:
        print("Out of range. Default used: (yourmin, 100).")
        maxi = 100
    # round with max and min inside to account for float. if round just random.random you have either 0 or 1, no good
    randomReturn = round(random.random() * maxi + mini) - mini
    return randomReturn


# original before cleanup
# def randInt(mini=0, maxi=100):
#     if maxi < mini:
#         return "The max cannot be less than the min. Please enter new values."
#     if mini < 0:
#         print("Out of range. Default used: (0, yourmax).")
#         randomReturn = round(random.random() * maxi)
#         return randomReturn
#     if maxi > 100:
#         print("Out of range. Default used: (yourmin, 100).")
#         randomReturn = round(random.random() * 100 + mini) - mini
#         return randomReturn
#     randomReturn = round(random.random() * maxi + mini) - mini
#     return randomReturn

print(f"{randInt(-1, 50)}\n\n***** new line *****\n")
print(f"{randInt(50, 200)}\n\n***** new line *****\n")
print(f"{randInt(50, 40)}\n\n***** new line *****\n")
print(f"{randInt(1, 20)}\n\n***** new line *****\n")
