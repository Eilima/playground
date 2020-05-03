import numpy

# Ask for user input and convert string input to int
x = int(input('Enter a number for x:\n'))
y = int(input('Enter a number for y:\n'))
# Print the the x to the of y
print('X**Y = ' + str(x**y))
# Print the log base of 2 of x
print('log(x) = ' + str(numpy.log2(x)))
