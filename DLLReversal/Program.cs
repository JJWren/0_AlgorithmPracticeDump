using System;

namespace DLLReversal
{
    class Program
    {
        static void Main(string[] args)
        {
            DLL FirstDLL = new DLL();

            FirstDLL.addBack(new DNode(7));
            FirstDLL.ShowList();
            FirstDLL.addBack(new DNode(5));
            FirstDLL.ShowList();
            FirstDLL.addBack(new DNode(3));
            FirstDLL.ShowList();
            FirstDLL.addBack(new DNode(1));
            FirstDLL.ShowList();
            FirstDLL.addBack(new DNode(8));
            FirstDLL.ShowList();
            FirstDLL.addBack(new DNode(4));
            FirstDLL.ShowList();
            FirstDLL.addBack(new DNode(2));
            FirstDLL.ShowList();

            FirstDLL.Reverse();

            FirstDLL.ShowList();
        }
    }
}
