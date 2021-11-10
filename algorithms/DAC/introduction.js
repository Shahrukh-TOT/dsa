/**
 * Divide and Conquer Algorithm
 * 
 * This technique can be divided into the following three parts:
 *  1. Divide: This involves dividing the problem into smaller sub-problems.
 *  2. Conquer: Solve sub-problems by calling recursively until solved.
 *  3. Combine: Combine the sub-problems to get the final solution of the whole problem.
 * 
 * Quicksort is a sorting algorithm. 
 *  The algorithm picks a pivot element and rearranges the array elements so that all elements smaller than the picked pivot element move to the 
 *  left side of the pivot, and all greater elements move to the right side. Finally, the algorithm recursively sorts the subarrays on the left and
 *  right of the pivot element.
 *  
 * Merge Sort is also a sorting algorithm. 
 *  The algorithm divides the array into two halves, recursively sorts them, and finally merges the two sorted halves.
 *  
 * Closest Pair of Points 
 *  The problem is to find the closest pair of points in a set of points in the x-y plane. 
 *  The problem can be solved in O(n^2) time by calculating the distances of every pair of points and comparing the distances to find the minimum. 
 *  The Divide and Conquer algorithm solves the problem in O(N log N) time.
 *  
 * Strassen’s Algorithm 
 *  is an efficient algorithm to multiply two matrices. 
 *  A simple method to multiply two matrices needs 3 nested loops and is O(n^3). Strassen’s algorithm multiplies two matrices in O(n^2.8974) time.
 *  
 * Cooley–Tukey Fast Fourier Transform (FFT) algorithm 
 * is the most common algorithm for FFT. It is a divide and conquer algorithm which works in O(N log N) time.  
 *  
 * Karatsuba algorithm 
 *  for fast multiplication does the multiplication of two n-digit numbers in at most
 */