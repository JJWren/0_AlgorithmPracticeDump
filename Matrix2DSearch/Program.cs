using System;

namespace Matrix2DSearch
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] matrix = new int[4, 4] { { 12, 34, 45, 56 }, { 98, 87, 76, 65 }, { 56, 67, 78, 89 }, { 54, 43, 32, 21 } };
            int[,] search = new int[2, 2] { { 67, 78 }, { 43, 32 } };
            MatrixDisplay(matrix);
            MatrixSearch(matrix, search);
        }

        //Matrix Display
        public static void MatrixDisplay(int[,] matrix)
        {
            //Goes through the height of the matrix array
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string output = "[";
                //Goes through the length of a single array
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    if (j == matrix.GetLength(1) - 1)
                    {
                        output += $"{matrix[i, j]}";
                    }
                    else
                    {
                        output += $"{matrix[i, j]}, ";
                    }
                }
                output += "]";
                Console.WriteLine(output);
            }
        }

        // Given a large matrix array and a smaller matrix, return true whether the smaller matrix array is inside the larger array

        // Ex, given:
        // [ [12,34,45,56],
        //   [98,87,76,65],
        //   [56,67,78,89],
        //   [54,43,32,21] ]

        // and:
        // [ [67,78],
        //   [43,32] ]
        // Return true 

        // or given:
        // [ [65,78],
        //   [43,32] ]
        // Return false

        public static bool MatrixSearch(int[,] matrix, int[,] search)
        {
            // This will only work given a 2,2 matrix... however, this is rectified by using a loop checking the Search matrix length...
            //This will change to true if Search is found in Matrix
            bool Ans = false;
            //Goes through height of matrix
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                //Goes through length of curr array
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    Console.WriteLine($"Checking Matrix i{i} and j {j}");

                    Console.WriteLine($"Matrix {matrix[i, j]}");
                    Console.WriteLine($"Search {search[0, 0]}");
                    if ((search[0, 0] == matrix[i, j]) && (search[1, 0] == matrix[i + 1, j]))
                    {
                        Console.WriteLine("First match found");
                        if ((search[1, 0] == matrix[i + 1, j]) && (search[1, 1] == matrix[i + 1, j + 1]))
                        {
                            Console.WriteLine("Second match Found!\n");
                            Ans = true;
                        }
                        else
                        {
                            Console.WriteLine("Second match not found...");
                        }
                    }
                }
            }
            Console.WriteLine($"Sorry, could not find a match in your matrix.");
            return Ans;
        }
    }
}
