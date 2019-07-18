class computer:
    def __init__(self):
        self.price=900
    def sell(self):
        print("selling price:{}".format(self.price))
    def setmaxprice(self,p):
        self.price=p
c=computer()
c.sell()
c.__price=1000
c.sell()
c.setmaxprice(1000)
c.sell()
