# Greatest Common Factor
# Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both).
# Greek mathematician Euclid demonstrated these facts:

# 1)      gcf(a,b) == a, if a == b;
# 2)      gcf(a,b) == gcf(a-b,b), if a>b;
# 3)      gcf(a,b) == gcf(a,b-a), if b>a.”

#   TAKE 1:
# def gcf(a, b):
#     # Base Case
#     if a == b:
#         return a
#     # Continue
#     else:
#         if a > b:
#             return gcf(a-b, b)
#         elif a < b:
#             return gcf(a, b-a)

#   TAKE 2:
def gcf(a, b):
    # if a can be divided by b without leaving a remainder, b is the gcf
    if a % b == 0:
        return b
    # if the remainder of a / b is 1, the gcf is 1 (example: gcf(9, 4))
    if a % b == 1:
        return 1
    
    return gcf(a, b % a)

print(gcf(6, 8))