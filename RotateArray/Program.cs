using System;
using System.Collections.Generic;
using System.Linq;

namespace RotateArray
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] Arr1 = { 1, 2, 3, 4, 5 };
            int[] Arr2 = { -3, -5, -7 };
            int[] Arr3 = { 1, 3, 4, 7 };
            writeIntArr(RotateArrayRight(Arr1, 4));
            writeIntArr(RotateArrayRight(Arr2, 4));
            writeIntArr(RotateArrayRight(Arr3, 1));
        }

        public static void writeIntArr(int[] Arr)
        {
            Console.Write("[");
            for (int i = 0; i < Arr.Count() - 1; i++)
            {
                Console.Write(Arr[i] + ", ");
            }
            Console.Write(Arr[Arr.Count() - 1] + "]\n");
        }

        public static int[] RotateArrayRight(int[] A, int K)
        {
            while (K > 0)
            {
                int temp = A[A.Count() - 1];
                for (int i = A.Count() - 1; i > -1; i--)
                {
                    if (i != 0)
                    {
                        A[i] = A[i - 1];
                    }
                    else
                    {
                        A[i] = temp;
                    }
                }
                K--;
            }
            return A;
        }
    }
}
