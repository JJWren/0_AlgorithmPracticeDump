def factorial(num):
    if num <= 0:
        return 1
    return num * factorial(num-1)

#  expecting 120 for 5!
print(factorial(5))

"""
BASE CASE |  RETURN 1
The stack piles up until you hit the base case of 'return 1'
------------------------------------------------------------
1 * factorial(1 - 1)        => last item in stack
2 * factorial(2 - 2)
3 * factorial(3 - 3)
4 * factorial(4 - 4)
5 * factorial(5 - 5)        => first item on top of stack
"""

