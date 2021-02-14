using System;
using System.Collections.Generic;

namespace RemoveDuplicates
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list1 = new List<int>();
            list1.AddRange(new int[]
            {
                0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,
            });
            RemoveDups(list1);
            List<int> list2 = new List<int>();
            list2.AddRange(new int[]
            {
                1,3,4,1,2,0,2,0,3,4,5,7,5,6,8,9,6,7,8,9,
            });
            RemoveDups(list2);
        }

        public static void writeList(List<int> lis)
        {
            Console.Write("[");
            for (int i = 0; i < lis.Count - 1; i++)
            {
                Console.Write(lis[i] + ", ");
            }
            Console.Write(lis[lis.Count - 1] + "]");
        }

        public static List<int> RemoveDups(List<int> numList)
        {
            //Given a sorted List, return a NEW List that doesn't have any duplicate values
            Console.Write("The original list is:\n");
            writeList(numList);
            Console.Write("\n");
            for (int i = 0; i < numList.Count; i++)
            {
                for (int j = i + 1; j < numList.Count; j++)
                {
                    if (numList[j] == numList[i])
                    {
                        numList.RemoveAt(j);
                    }
                }
            }
            Console.Write("The new list is:\n");
            writeList(numList);
            Console.Write("\n\n");

            return numList;
        }
    }
}
