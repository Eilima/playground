# Cast user inputs to float
# Ask for user annual salary
annual_salary = float(input('Enter annual salary:\n'))
# Ask for user percentage of salary that will be save per month
portion_saved = float(input('Enter the percent of your salary to save, as a decimal:\n'))
# Ask for total cost of house
total_cost = float(input('Enter cost of the your dream home:\n'))

# Sets variables
portion_down_payment = total_cost * .25
current_savings = 0
num_of_months = 0
r = .04

# Will run program until current_savings is larger that required down payment
while current_savings < portion_down_payment:
    # Sets current savings to the monthly amount that will be saved and monthly return
    current_savings = current_savings + (annual_salary/12)*portion_saved + (current_savings*0.04)/12
    # Adds to a month
    num_of_months += 1
# Prints number of iterations or 'months' that it would take to save for the down payment
print('Number of months: ' + str(num_of_months))
