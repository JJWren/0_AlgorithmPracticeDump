using System;

namespace DLLReversal
{
    public class DNode
    {
        public int val { get; set; }
        public DNode next { get; set; }
        public DNode prev { get; set; }
        public DNode(int value)
        {
            val = value;
            next = null;
            prev = null;
        }
    }
    public class DLL
    {
        public DNode head { get; set; }
        public DNode tail { get; set; }
        public DLL()
        {
            head = null;
            tail = null;
        }

        public void addBack(DNode someNode)
        {
            if (head == null)
            {
                head = someNode;
                tail = someNode;
            }
            else
            {
                tail.next = someNode;
                someNode.prev = tail;
                tail = someNode;
            }
        }
        public void addFront(DNode someNode)
        {
            if (head == null)
            {
                head = someNode;
                tail = someNode;
            }
            else
            {
                someNode.next = head;
                head = someNode;
            }
        }

        //Remove a given value from the list, or return false if not found
        public bool removeVal(int someInt)
        {
            DNode runner = head;
            while (runner.next.val != someInt && runner.next != tail)
            {
                runner = runner.next;
            }
            if (runner.next.val == someInt)
            {
                runner.next = runner.next.next;
                runner.next.prev = runner;
                Console.WriteLine("Node Removed");
                return true;
            }
            else
            {
                Console.WriteLine("Node does not exist in this DLL");
                return false;
            }
        }

        //Insert a new node after a given value, or return false if the value was not found
        public bool addAfter(int someInt, DNode addNode)
        {
            DNode runner = head;
            while (runner.val != someInt && runner != tail)
            {
                runner = runner.next;
            }
            if (runner.val == someInt)
            {
                addNode.next = runner.next;
                runner.next = addNode;
                addNode.prev = runner;
                addNode.next.prev = addNode;
                Console.WriteLine("Node added");
                return true;
            }
            else
            {
                Console.WriteLine("Node to add after does not exist in this DLL");
                return false;
            }
        }

        public void Reverse()
        {
            DNode temp = head;
            DNode current = head;

            while (current != null)
            {
                temp = current.prev;    // temp is node behind
                current.prev = current.next;    // node behind is now node in front
                current.next = temp;    // node in front is now original node behind (temp)
                current = current.prev;    // current node is now node behind
            }

            // There is an error at this point here somewhere...
            head = temp.prev;
        }

        public void ShowList()
        {
            if (head == null)
            {
                Console.WriteLine("No list to return, add some values");
            }
            else
            {
                DNode runner = head;
                while (runner.next != null)
                {
                    Console.Write($"{runner.val} -> ");
                    runner = runner.next;
                }
                Console.Write($"{tail.val}");
            }
            Console.WriteLine("");
        }
    }
}
