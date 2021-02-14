using System;
using System.Collections.Generic;

// public static bool BinarySearch(int[] arr, int n){
// return true or false
// }
// Binary Search: given a sorted array and a number to search for, return true or false if we find it

namespace binarySearch
{
    class Program
    {
        public static int BinarySearch(int[] arr, int val)
        {
            int min = 0, max = arr.Length - 1;

            int halfway = (min + max) / 2;

            while (min < max && halfway != min && halfway != max)
            {
                // Console.WriteLine("step 1 halfway - " + halfway);
                // Console.WriteLine("value - " + val);
                // Console.WriteLine("min - " + min);
                // Console.WriteLine("max - " + max);

                if (val == arr[halfway])
                {
                    return 1;
                }
                else if (val < arr[halfway])
                {
                    max = halfway;
                    halfway = (min + max) / 2;
                    // Console.WriteLine("step 2.1 halfway - " + halfway);

                    if (val == arr[halfway])
                    {
                        return 1;
                    }
                }
                else if (val > arr[halfway])
                {
                    min = halfway;
                    halfway = (min + max) / 2;
                    // Console.WriteLine("step 2.2 halfway - " + halfway);

                    if (val == arr[halfway])
                    {
                        return 1;
                    }
                }
            }
            return 0;
        }

        static void Main(string[] args)
        {
            int[] arr1 = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            int[] arr2 = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 };
            int[] arr3 = { 0, 10, 20, 30, 40, 50 };
            int num1 = 6;
            int num2 = 1;
            int num3 = 20;

            Console.WriteLine(BinarySearch(arr1, num1));
            Console.WriteLine(BinarySearch(arr1, num2));
            Console.WriteLine(BinarySearch(arr1, num3));
            Console.WriteLine("");

            Console.WriteLine(BinarySearch(arr2, num1));
            Console.WriteLine(BinarySearch(arr2, num2));
            Console.WriteLine(BinarySearch(arr2, num3));
            Console.WriteLine("");

            Console.WriteLine(BinarySearch(arr3, num1));
            Console.WriteLine(BinarySearch(arr3, num2));
            Console.WriteLine(BinarySearch(arr3, num3));
            Console.WriteLine("");
        }
    }
}
