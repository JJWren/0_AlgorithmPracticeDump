def spacing(numOfFunction):
    print(
        f"\n--------------------\nFunction: {numOfFunction}\n--------------------\n")
    return


# Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
# Example: countdown(5) should return [5,4,3,2,1,0]

spacing(1)


def countDownFrom(num):
    list1 = []
    for i in range(num, -1, -1):
        list1.append(i)
    return list1


a = countDownFrom(5)
print(a)


# Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
# Example: print_and_return([1,2]) should print 1 and return 2

spacing(2)


def doOneGiveOther(list):
    print(list[0])
    return list[1]


firstList = [1, 2]
recvdNum = doOneGiveOther(firstList)
print(recvdNum)

# First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
# Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)

spacing(3)


def first_plus_length(list):
    weirdSum = list[0] + len(list)
    return weirdSum


b = [1, 2, 3, 4, 5]
c = first_plus_length(b)
print(c)


# Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
# Example: values_greater_than_second([5,2,3,2,1,4]) should print 3 and return [5,3,2]
# Example: values_greater_than_second([3]) should return False

spacing(4)


def values_greater_than_second(list):
    count = 0
    newList = []
    if len(list) > 1:
        for i in range(0, len(list), 1):
            if list[i] > list[1]:
                count = count + 1
                newList.append(list[i])
        print(count)
        return newList
    else:
        return False


d = [5, 2, 3, 2, 1, 4]
e = values_greater_than_second(d)
print(e)
f = [3]
g = values_greater_than_second(f)
print(g)


# This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
# Example: length_and_value(4,7) should return [7,7,7,7]
# Example: length_and_value(6,2) should return [2,2,2,2,2,2]

spacing(5)


def length_and_value(size, value):
    newList = []
    for i in range(0, size, 1):
        newList.append(value)
    return newList


print(length_and_value(4, 7))
print(length_and_value(6, 2))
