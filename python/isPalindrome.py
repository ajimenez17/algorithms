#
# checks to see if a Queue is a palindrome. 
# Algorithms book, p 75

# The strategy here is to create a stack where we push the front element in the queue. The elements in the stack will be in reverse order of the queueue.

# We then compare the front element in the queue to the popped element of the stack 

def isPalindrome(q):
 								  # the queue is 1 -> 2 -> 3 -> 4 -> 5
	isP = False
	s = stack()
	for i in range(q.size()):
		s.push(q.front()).         # we push what's in front of the queue as  1 <- 2 <- 3 <- 4 <- 5
		q.enqueue(dequeue())       # enqueue what has beeen dequeued to preserve the stack

	for i in range (q.size()):
		if  s.pop() == q.front()    # we compare stack pop value (1) to the front of the stack (5)
			q.enque(q.dequeue()).   # we dequeue and enqueue again to preserve the stack
			isP = True              # if the numbers match, return True
		else:                       #  if the numbers don't match, return Tfalse
			q.enquue(q.dequeue())   # enqueue even if it's not true since we need to preserve stack
			is_p = False

	return isP 

