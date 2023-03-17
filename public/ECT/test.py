import os

year = int(input("year: "))
sub = input("subject: ")

for i in range(0, 2023-year):
    print("year is ", year + i)
    sujet_link = input("sujet link: ")
    corrige_link = input("corrige link: ")
    corrige_path = str(year+i) + "/" + sub + "/" + "corrige.pdf"
    sujet_path = str(year+i) + "/" + sub + "/" + "sujet.pdf"

    os.system("curl " + sujet_link + " >> " + sujet_path)
    os.system("curl " + corrige_link + " >> " + corrige_path)
