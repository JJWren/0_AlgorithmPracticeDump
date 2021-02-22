def spacing(numOfFunction):
    print(
        f"\n--------------------\nFunction: {numOfFunction}\n--------------------\n")
    return

# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]


spacing(1)


def biggie_size(input):
    for i in range(0, len(input), 1):
        if input[i] > 0:
            input[i] = "big"
    return input


print(biggie_size([-1, 3, 5, -5]))

# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it

spacing(2)


def count_positives(input):
    posCount = 0
    for i in range(0, len(input), 1):
        if input[i] > 0:
            posCount += 1
            print(f"The current positive count is: {posCount}")
    input[len(input) - 1] = posCount
    return input


print(count_positives([-1, 1, 1, 1]))
print(count_positives([1, 6, -4, -2, -7, -2]))

# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7

spacing(3)


def sum_total(input):
    sum = 0
    for i in range(0, len(input), 1):
        sum += input[i]
    return sum


print(sum_total([1, 2, 3, 4]))
print(sum_total([6, 3, -2]))


# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5

spacing(4)


def average(input):
    avg = sum_total(input) / len(input)
    return avg


print(average([1, 2, 3, 4]))


# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0

spacing(5)


def length(input):
    lenCount = 0
    for i in input:
        lenCount += 1
    return lenCount


print(length([37, 2, 1, -9]))
print(length([]))


# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False

spacing(6)


def minimum(input):
    if len(input) > 0:
        currMin = input[0]
        for i in range(0, len(input), 1):
            if currMin > input[i]:
                currMin = input[i]
        return currMin
    return False


print(minimum([37, 2, 1, -9]))
print(minimum([]))


# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False

spacing(7)


def maximum(input):
    if len(input) > 0:
        currMax = input[0]
        for i in range(0, len(input), 1):
            if currMax < input[i]:
                currMax = input[i]
        return currMax
    return False


print(maximum([37, 2, 1, -9]))
print(maximum([]))


# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

spacing(8)


def subultimate_analysis(input):
    subult_dict = {
        'sumTotal': sum_total(input),
        'average': average(input),
        'minimum': minimum(input),
        'maximum': maximum(input),
        'length': length(input)
    }
    return subult_dict


print(subultimate_analysis([37, 2, 1, -9]))


# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

spacing(9)


def reverse_list(input):
    for i in range(0, int(len(input) / 2), 1):
        input[i], input[len(input)-1-i] = input[len(input)-1-i], input[i]
    return input


print(reverse_list([37, 2, 1, -9]))
