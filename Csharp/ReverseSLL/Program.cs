using System;
using System.Collections.Generic;

namespace ReverseSLL
{
    class Program
    {
        static void Main(string[] args)
        {
            SLL SLL1 = new SLL();

            SLL1.AddNode(new Node(1));
            SLL1.AddNode(new Node(2));
            SLL1.AddNode(new Node(3));
            SLL1.AddNode(new Node(4));
            SLL1.AddNode(new Node(5));
            // 1 -> 2 -> 3 -> 4 -> 5

            SLL1.ShowList();

        }
    }
}
