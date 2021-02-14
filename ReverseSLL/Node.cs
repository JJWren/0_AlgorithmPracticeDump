using System;
using System.Collections.Generic;

namespace ReverseSLL
{
    public class Node
    {
        //Our nodes attributes
        public int val { get; set; }
        public Node next { get; set; }

        //Creates an instance of a Node with a set value and a .next pointing to null
        public Node(int val)
        {
            this.val = val;
            this.next = null;
            Console.WriteLine($"-----Node{val}-----");
            Console.WriteLine($"this.val: {val}");
            Console.WriteLine($"this.next: {next}");
        }
    }
}