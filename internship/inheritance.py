class Bird:
    def __init__(self):
        print("bird is ready")
    def whoisthis(self):
        print("bird")
    def swim(self):
        print("swims fast")

class penguin(Bird):
    def __init__(self):
        super().__init__()
        print("penguin is  ready")
    def whoisthis(self):
            print("Penguin")
    def run(self):
            print("run faster")
peggy=penguin()
peggy.whoisthis()
peggy.swim()
peggy.run()
