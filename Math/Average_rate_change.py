while(True):
    z = int(input('Num: '))
    y = int(input('Num y: '))
    def check(x):
        
        return (x + 3)**2 + 5

    def avg(newX, newY, z, y):
        return (newY - newX) / (abs(z - y))

    print(check(z))
    print(check(y))
    print('Average rate of change: ' + str(avg(check(z), check(y), z, y)))
    
    

