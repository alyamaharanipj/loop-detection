class Node
{
	constructor(d)
	{
		this.data = d;
		this.next = null;
	}
}

// Head of list
let head;

/* Inserts a new Node at front of the list. */
const push = (data) => {
	let newNode = new Node(data);
	newNode.next = head;
	head = newNode;
}

// Function to detect first node of loop
// in a linked list that may contain loop
const detectLoop = (head) => {
	if (head == null) return 0;
	else {
		// Traversing the linked list for detecting loop
		while (head != null) {
			// If loop found
			if (head.data == -1) {
				return 1;
			} else {
                // Mark visited node
				head.data = -1;
				head = head.next;
			}
		}
		
		// If loop not found return false
		return 0;
	}
}

[1, 2, 3, 4, 5, 6].map(el => {
    push(el)
})

/* Create a loop for testing */
head.next.next.next.next.next = head.next.next;

console.log(detectLoop(head))