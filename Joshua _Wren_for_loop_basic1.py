def spacing():
    print("\n--------------------\nNext Function\n--------------------\n")
    return

# Basic - Print all integers from 0 to 150.


spacing()


def countByOne():
    for count in range(0, 151):
        print(count)


spacing()

# Multiples of Five - Print all the multiples of 5 from 5 to 1,000

for multiplesOfFive in range(5, 1001, 5):
    print(multiplesOfFive)

spacing()

# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".

for num in range(1, 101):
    if num % 10 == 0:
        print("Coding")
    elif num % 5 == 0:
        print("Dojo")
    else:
        print(num)

spacing()

# Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.


def sumOf(input):
    total = 0
    for i in range(0, input, 1):
        total += i
    print(f"The sum of all positive integers up to {input} is: {total}")
    return


sumOf(500000)

spacing()

# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.


def decByFours(start, stop):
    for i in range(start, stop, -4):
        print(i)
    return


decByFours(2018, 0)

spacing()

# Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)


def flexCounter(lowNum, highNum, mult):
    for i in range(lowNum, highNum + 1, 1):
        if i % mult == 0:
            print(i)
    return


flexCounter(2, 9, 3)
