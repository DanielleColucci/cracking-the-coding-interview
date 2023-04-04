// 1. Write code to remove duplicates from an unsorted linked lists
    // How would you solve this problem if a temporary buffer is not allowed?

function removeDups(head) {
  let current = head
  let previous
  let visited = []
  while (current.next) {
    visited.push[current]
    if (visited.includes(current)) {
      previous.next = current.next
      previous = current
      current = current.next
    }
  }
}

// 2. Implement an algorithm to find the kth to last element of a singly linked list

// 3. Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node
    // EXAMPLE
      // input: the node c from the linked list a --> b --> c --> d --> e --> f
      // result: nothing is returned, but the new linked list looks like a --> b --> d --> e --> f

// 4. Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x (IMPORTANT: the partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions. The additional spacing the example below indicates the partition. Yes, the output below is one of many valid outputs)
    // EXAMPLE
      // input:  3 --> 5 --> 8 --> 5 --> 10 --> 2 --> 1 [partition = 5]
      // output: 3 --> 1 --> 2         -->        10 --> 5 --> 5 --> 8 

// 5. You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list (You are not allowed to "cheat" and just convert the linked list to an integer)
    // EXAMPLE
      // input: (7 --> 1 --> 6) + (5 --> 9 --> 2)
      // output: 2 --> 1 --> 9

    // Suppose the digits are stored in forward order. Repeat the above problem 
    // EXAMPLE
      // input: (6 --> 1 --> 7) + (2 --> 9 --> 5)
      // output: 9 --> 1 --> 2

// Implement a function to check if a linked list is a palindrome 

// Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the kth node of the second linked list, then they are intersecting

// Given a linked list which might contain a loop, implement an algorithm that returns the node at the beginning of the loop (if one exists)
    // EXAMPLE
      // input: A --> B --> C --> D --> E --> C (the same C as earlier)
      // output: C