import random
import cv2
lst=['rock','paper','scissor']
player1=input("enter")
player2=input("enter")
print('player1:{0}'.format(player1))
print('player2:{0}'.format(player2))
if(player1==player2):
    print("tie")
elif(player1=='rock' and player2=='paper'):
    print('player1 looses')
    img1=cv2.imread('loose.jpg',1)
    print(img1)
    cv2.imshow('loose',img1)
    cv2.waitKey(0)
elif(player1=='rock' and player2=='scissor'):
    print('player1 wins')
    img=cv2.imread('win.jpg',1)
    print(img)
    cv2.imshow('win',img)
    cv2.waitKey(0)
elif(player1=='paper' and player2=='scissor'):
    print('player1 loose')
    img1=cv2.imread('loose.jpg',1)
    print(img1)
    cv2.imshow('loose',img1)
    cv2.waitKey(0)
elif(player1=='paper' and player2=='rock'):
    print('player1 wins')
    img=cv2.imread('win.jpg',1)
    print(img)
    cv2.imshow('win',img)
    cv2.waitKey(0)
elif(player1=='scissor' and player2=='paper'):
    print('player1 wins')
    img=cv2.imread('win.jpg',1)
    print(img)
    cv2.imshow('win',img)
    cv2.waitKey(0)
else:
    print('player1 looses')
    img1=cv2.imread('loose.jpg',1)
    print(img1)
    cv2.imshow('loose',img1)
    cv2.waitKey(0)
