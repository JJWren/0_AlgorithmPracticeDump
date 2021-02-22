using System;

namespace TacoTruck
{
    class Program
    {
        static void Main(string[] args)
        {
            // Taco truck:
            // Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to locations of his customers. They walk to his truck, but he is fair-minded so he wants to minimize total distace from truck to customers. City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joes checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location. Example: given [ [10,0], [-1,-10], [2,4] ], return [2,0] for optimal taco truck location, as total distance is 25 (8+13+4).
            int[,] customer = new int[3, 2] { { 10, 0 }, { -1, -10 }, { 2, 4 } };
            Console.WriteLine("Hello World!");
            // int[,] customer = new int[3,2] { {10,0}, {-1,-10}, {2,4} };
            int result1 = 0;
            int result2 = 0;

            int sum1 = 0;
            int sum2 = 0;
            for (int i = 0; i < customer.GetLength(0); i++)
            {
                //Loop through the array and get the average of position x.
                sum1 = sum1 + customer[i, 0];
            }
            result1 = sum1 % 3;
            for (int j = 0; j < customer.GetLength(0); j++)
            {
                //Loop through the array and get the average of position y.
                sum2 = sum2 + customer[j, 1];
            }
            result2 = sum2 % 3;
            int[] tacotruck = new int[] { result1, result2 };
            Console.WriteLine(tacotruck[0] + "," + tacotruck[1]);
        }
    }
}
