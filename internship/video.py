import cv2
img=cv2.imread('win.jpg')
print(img)
cv2.imshow('win',img)
k=cv2.waitKey(0)&0xFF
if k==27:
    cv2.destroyAllWindows()
elif k==ord('s'):
    cv2.imwrite('win_copy.jpg',img)
    cv2.destroyallWindows()
