using System;
using System.Collections.Generic;

namespace Tries
{
    public class TNode
    {
        public TNode[] children = new TNode[26];
        public bool isWord;
        public TNode()
        {
            isWord = false;
            // 1 = a, 2 = b, 3 = c... 26 = z
            for (int i = 0; i < 26; i++)
            {
                children[i] = null;
            }
        }
    }

    public class Trie
    {
        //Trie setup
        public TNode root;

        public Trie()
        {
            root = new TNode();
        }

        // how do I insert a word into a trie
        // Ex: given the word “DOG”, how do I make sure that is properly stored in my trie?

        public void Insert(string word)
        {
            word = word.ToLower();
            TNode jumper = root;
            string alpha = "abcdefghijklmnopqrstuvwxyz";

            for (int i = 0; i < word.Length; i++)
            {
                for (int j = 0; j < alpha.Length; i++)
                {
                    if (alpha[j] == word[i])
                    {
                        if (jumper.children[j] == null)
                        {
                            jumper.children[j] = new TNode();
                        }
                        jumper = jumper.children[j];
                        break;
                    }
                }
            }
        }

        public bool Search(string word)
        {
            word = word.ToLower();
            TNode jumper = root;
            string alpha = "abcdefghijklmnopqrstuvwxyz";

            for(int i = 0; i < word.Length; i++)
            {
                for(int c = 0; c < alpha.Length; c++)
                {

                    if(alpha[c] == word[i])
                    {
                        if(jumper.children[c] == null)
                        {
                            Console.WriteLine("Trie does not contain word");
                            return false;
                        }
                        else
                        {
                            jumper = jumper.children[c];
                            break;
                        }
                    }
                }
            }
            Console.WriteLine($"Trie Search word: {word}");
            return true;
        }
    }
}