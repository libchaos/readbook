import time
from random import randint
import random
random.seed(0)

st = time.time()
def minId(lst):
    i = 0
    while True:
        if i not in lst:
            return i
        else:
            i += 1
def minId2(lst):
    F = [False for i in range(len(lst) + 1)]
    for i in lst:
        if i < len(lst):
            F[i] = True
    for i in range(len(lst) + 1):
        if F[i] == False:
            return i

def minId(lst):
    =
    
lst = [randint(0, 100) for i in range(10000)]
id = minId(lst)
et = time.time()
print(id, et)

