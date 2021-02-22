using System;
using System.Collections.Generic;

namespace BinarySearchTree
{
    public class BST
    {
        //Setup
        public BNode root { get; set; }
        public BST()
        {
            root = null;
        }

        // How do I add nodes to the BST
        // How do I find the min or max in the BST

        public string AddNode(BNode NodeToAdd)
        {
            BNode current = root;

            if (root == null)
            {
                root = NodeToAdd;
                return $"Root is now '{NodeToAdd.value}'.";
            }
            else
            {
                while (true)
                {
                    // Less than or Equal to Current Node
                    if (NodeToAdd.value <= current.value)
                    {
                        if (current.left == null)
                        {
                            current.left = NodeToAdd;
                            return $"{NodeToAdd.value} has now been added to your BST.";
                        }
                        else
                        {
                            current = current.left;
                        }
                    }
                    // Greater than Current Node
                    else
                    {
                        if (current.right == null)
                        {
                            current.right = NodeToAdd;
                            return $"{NodeToAdd.value} has now been added to your BST.";
                        }
                        else
                        {
                            current = current.right;
                        }
                    }
                }
            }
        }

        public BNode Min()
        {
            if (root == null)
            {
                Console.WriteLine("There are no nodes. Consider adding one!");
                return null;
            }

            BNode current = root;
            int count = 0;

            while (current.left != null)
            {
                current = current.left;
                count++;
            }
            Console.WriteLine($"It took {count} jumps to get to min value: {current.value}!");
            return current;
        }

        public BNode Max()
        {
            if (root == null)
            {
                Console.WriteLine("There are no nodes. Consider adding one!");
                return null;
            }

            BNode current = root;
            int count = 0;

            while (current.right != null)
            {
                current = current.right;
                count++;
            }
            Console.WriteLine($"It took {count} jumps to get to max value: {current.value}!");
            return current;
        }

        public bool FindNode(int num)
        {
            BNode current = root;
            if (root == null)
            {
                Console.WriteLine("No nodes exist in this BST.");
                return false;
            }
            else
            {
                while (current.value != num)
                {
                    if (current.value < num)
                    {
                        if (current.right == null)
                        {
                            Console.WriteLine("Tree does not contain value");
                            return false;
                        }
                        current = current.right;
                    }
                    if (current.value > num)
                    {
                        if (current.left == null)
                        {
                            Console.WriteLine("Tree does not contain value");
                            return false;
                        }
                        current = current.left;
                    }
                }
                Console.WriteLine($"Found the value! - {current.value}");
                return true;
            }
        }

        public int Size(BNode node)
        {
            //initial node should be root
            if (node == null)
            {
                return (0);
            }
            else
            {
                return (Size(node.left) + 1 + Size(node.right));
            }
        }

        public int Depth(BNode root)
        {
            if (root == null) return 0;
            int LeftDepth = Depth(root.left);
            int RightDepth = Depth(root.right);
            // condition ? expIfTrue : expIfFalse
            // If RD is > LD ? Do this : Otherwise, Do This
            return RightDepth > LeftDepth ? RightDepth + 1 : LeftDepth + 1;
        }


        // BST IsBalanced (Tell me if a tree is balanced by height of left and right being no greater than 1 in difference)

        public bool IsBalanced()
        {
            Console.WriteLine(Math.Abs(Depth(root.left) - Depth(root.right)));
            return (Math.Abs(Depth(root.left) - Depth(root.right)) > 1) ? false : true;
        }

        public bool isFull()
        {
            if (root == null)
            {
                return true;
            }
            BNode current = root;
            BNode lastNode = null;
            while (lastNode != root)
            {
                if (current.left == null && current.right != null || current.right == null && current.left != null)
                {
                    return false;
                }
                if (current.left != null && current.right != null)
                {
                    if (lastNode != current.left)
                    {
                        current = current.left;
                    }
                    if (lastNode != current.right)
                    {
                        current = current.right;
                    }
                    else
                    {
                        lastNode = current;
                    }
                }
                if (current.left == null && current.right == null)
                {
                    lastNode = current;
                }
            }
            return true;
        }

        // Remove a given node from a BST
        // Think about your potential cases:

        // Case 1) the node to remove is at root
            // root cases:
                // 1) no children after root, set to null
                // 2) 1 child, move root to child
                // 3) 2 child, make root = root.right and reassign root.left to be root.right leftmost node

        // Case 2) the node to remove has no children
            // use prev (node) to keep track of 1 behind if node.left and node.right == null, set prev.X = null

        // Case 3) the node to remove has 1 child
            // make the parent.X jump to node.X to drop node

        // Case 4) the node to remove has 2 children
            // use prev.X = node.right, reassign node.left to leftmost of node.right

        // Case 5) the node isn’t even in the tree
            // use our previously made FindNode(), if true... do the rest, if false... do nothing

        // Maintain the integrity of the tree, meaning when you go through it later the values should still be in their proper left/right placement from the node above it

        public void RemoveNode(int num)
        {
            // Check if value is in BST first
            bool doesExist = FindNode(num);
            if (doesExist == true)
            {
                // do the rest of RemoveNode
            }
            return;
        }
    }
}