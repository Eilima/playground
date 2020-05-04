# Assignment:
# Write a program that does the following in order:
# 1. Asks the user to enter a number “x”
# 2. Asks the user to enter a number “y”
# 3. Prints out number “x”, raised to the power “y”.
# 4. Prints out the log (base 2) of “x”.
# Example:
# Enter number x: 2
# Enter number y: 3
# X**y = 8
# log(x) = 1


import numpy

# Ask for user input and convert string input to int
x = int(input('Enter a number for x:\n'))
y = int(input('Enter a number for y:\n'))
# Print the the x to the of y
print('X**Y = ' + str(x**y))
# Print the log base of 2 of x
print('log(x) = ' + str(numpy.log2(x)))
