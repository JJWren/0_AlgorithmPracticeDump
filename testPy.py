excerpt = " Another one got caught today, it's all over the papers. Teenager\
            Arrested in Computer Crime Scandal, Hacker Arrested after Bank Tampering\
            Damn kids.  They're all alike"

''' Your work starts here '''
print(f"##### Starting string search... #####")

# lowercase the string
lowercaseStr = excerpt.lower()
print(f"\nString as Lowercase: string")

# get length of string
lengthOfString = len(lowercaseStr)
print(f"Length of String: {lengthOfString}")

# turn string into list of words
stringList = lowercaseStr.split()
print(f"String as List: {stringList}")

# get length of list
numOfStringWords = len(stringList)
print(f"Length of String List: {numOfStringWords}")

# sort list alphabetically
stringList.sort()
print(f"Sorted String List: {stringList}")

# find specified strings in list and number of occurances of each
scandalCount = 0
arrestedCount = 0
erCount = 0
goodCount = 0
tomorrowCount = 0
for word in stringList:
    if "scandal" in word:
        scandalCount+=1
    elif "arrested" in word:
        arrestedCount+=1
    elif "er" in word:
        erCount+=1
    elif "good" in word:
        goodCount+=1
    elif "tomorrow" in word:
        tomorrowCount+=1
print(f'\nThe following strings appear "x" number of times:\nscandal - {scandalCount}\narrested - {arrestedCount}\ner - {erCount}\ngood - {goodCount}\ntomorrow - {tomorrowCount}')