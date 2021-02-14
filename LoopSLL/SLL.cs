using System;
using System.Collections.Generic;

namespace ReverseSLL
{
    public class SLL
    {
        //Our only attribute in a SLL is the existence of a head Node
        Node head { get; set; }

        public SLL()
        {
            head = null;
        }

        public void AddNode(Node n)
        {
            if (head == null)
            {
                head = n;
            }
            else
            {
                Node runner = head;
                while (runner.next != null)
                {
                    runner = runner.next;
                }
                runner.next = n;
            }
        }

        public void ShowList()
        {
            if (head == null)
            {
                Console.WriteLine("No list to return, add some values");
            }
            else
            {
                Node runner = head;
                while (runner.next != null)
                {
                    Console.Write($"{runner.val} -> ");
                    runner = runner.next;
                }
                Console.Write($"{runner.val}");
            }
        }

        public void Swap()
        {
            //  use temp (maybe prev as another link??), head, runner to swap values
        }

        public void createLoop()
        {
            Node runner = this.head;
            int count = 0;
            Node loop = this.head;
            while (runner.next != null)
            {
                count++;
                if (count == 3)
                {
                    loop = runner;
                }
                runner = runner.next;
            }
            runner.next = loop;
        }
    }
}