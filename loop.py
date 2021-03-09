
#for loop example
number = 1
for  i in range(1,2):
    number = number + i
print(number)

#while loop example
number = int(input("Enter a number: "))
counter = 0
result = 0
while number < 0:
    number = number + counter
    result = counter - 1 
print(result)