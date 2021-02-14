random_list = [64, 25, 12, 22, 11]
# random_list = [7, 8, 5, 4, 9, 2]


def selection_sort(input):
    for iterationLeft in range(len(input)):
        minimumValue = iterationLeft
        for iterationRight in range(iterationLeft+1, len(input), 1):
            if input[iterationRight] < input[minimumValue]:
                minimumValue = iterationRight
            input[iterationLeft], input[minimumValue] = input[minimumValue], input[iterationLeft]
    return input


print(selection_sort(random_list))
