using System;

namespace BinarySearchTree
{
    class Program
    {
        static void Main(string[] args)
        {
            BST FirstTree = new BST();
            FirstTree.AddNode(new BNode(5));

            Console.WriteLine($"The root value of FirstTree is: {FirstTree.root.value}");

            FirstTree.AddNode(new BNode(6));
            FirstTree.AddNode(new BNode(2));
            FirstTree.AddNode(new BNode(8));
            FirstTree.AddNode(new BNode(0));

            FirstTree.Min();
            FirstTree.Max();

            FirstTree.FindNode(7);
            FirstTree.FindNode(8);
            Console.WriteLine(FirstTree.Size(FirstTree.root));
        }
    }
}
