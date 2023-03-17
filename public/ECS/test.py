import os

def mkdir(path):
    try:
        os.mkdir(path)
    except:
        pass

for i in range(2012, 2023):
    mkdir(str(i)+'/mge')
    mkdir(str(i)+'/mge')
    mkdir(str(i)+'/maths')
    mkdir(str(i)+'/anglais')
    mkdir(str(i)+'/trad')
    mkdir(str(i)+'/culture')
    mkdir(str(i)+'/geo')
