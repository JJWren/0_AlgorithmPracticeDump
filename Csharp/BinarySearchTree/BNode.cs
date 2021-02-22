using System;
using System.Collections.Generic;

namespace BinarySearchTree
{
    public class BNode
    {
        public int value { get; set; }
        public BNode left { get; set; }
        public BNode right { get; set; }
        public BNode(int v)
        {
            value = v;
            left = null;
            right = null;
        }
    }
}