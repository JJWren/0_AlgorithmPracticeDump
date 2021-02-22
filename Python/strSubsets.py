# “String: In-Order Subsets
# Create strSubsets(str). Return an array with every possible in-order character subset of str.
# The resultant array itself need not be in any specific order – it is the subset of letters in each string that must be in the same order
# as they were in the original string. Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).”

# Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.


def strSubsets(str, subStr='', index=0):
    if len(str) == index:
        return [subStr]
    return strSubsets(str, subStr + str[index], index + 1) + strSubsets(str, subStr, index + 1)


print(strSubsets('abc'))