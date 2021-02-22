using System;

namespace interviewPrep
{
    class Program
    {
        static void Main(string[] args)
        {
            string RemoveDuplicates(string input)
            {
                // is input blank?
                if (input == "")
                {
                    return "string input was empty";
                }
                else
                {
                    char curr, next;
                    // loop through input
                    for (int i = 0; i < input.Length; i++)
                    {
                        curr = input[i];
                        // Console.WriteLine($"curr = {curr}");
                        // compare for duplicate values
                        for (int j = i + 1; j < input.Length; j++)
                        {
                            next = input[j];
                            // Console.WriteLine($"next = {next}");
                            if (curr == next)
                            {
                                // Console.WriteLine($"input[i]: {input[i]}");
                                // Console.WriteLine($"input[j]: {input[j]}");
                                // Console.WriteLine($"input[j-1]: {input[j - 1]}");
                                // Console.WriteLine($"input[j-2]: {input[j - 2]}");
                                input = input.Remove(j, 1);
                                input = input.Remove(i, 1);
                                // Console.WriteLine($"This is the new string: {input}");
                                i--;
                                break;
                            };
                        };
                    };
                };
                if (input == "")
                {
                    Console.WriteLine("Empty");
                }
                else
                {
                    Console.WriteLine(input);
                };
                return input;
            }

            RemoveDuplicates("ACCAABBC");
            Console.WriteLine("-----separate test case-----");
            RemoveDuplicates("ABCBBCBA");
            Console.WriteLine("\n-----separate function-----\n");

            string EncodeString(string input)
            {
                if (input == "")
                {
                    return "string was empty";
                }
                else
                {
                    string newOutput = "";
                    char curr;
                    // loop through input
                    for (int i = 0; i < input.Length; i++)
                    {
                        curr = input[i];
                        int count = 1;
                        // loop through input counting chars, if found, count inc and remove letter
                        for (int j = i + 1; j < input.Length; j++)
                        {
                            if (input[j] == curr)
                            {
                                count++;
                                input = input.Remove(j, 1);
                                j--;
                            }
                        }
                        newOutput += curr + count.ToString();
                    }
                    Console.WriteLine(newOutput);
                    return newOutput;
                }
            }

            EncodeString("aaaccbbccbbb");
            Console.WriteLine("\n-----separate function-----\n");

            bool IsPalindrome(string input)
            {
                string newString = "";
                for (int i = input.Length - 1; i >= 0; i--)
                {
                    newString += input[i];
                }
                Console.WriteLine($"The reversed string is: {newString}");
                if (newString == input)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            bool isIt = IsPalindrome("racecar");
            Console.WriteLine(isIt);
            bool isIt2 = IsPalindrome("race car");
            Console.WriteLine(isIt2);
        }
    }
}
