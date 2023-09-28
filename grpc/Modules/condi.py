import time
import adafruit_dht

class RoomCondition:
    def __init__(self, pin):
        if pin != 0:
            self.dht_device = adafruit_dht.DHT22(pin)
            self.dht_device.measure()

    def getRoomState(self):
        self.dht_device.measure()
        return {"t":self.dht_device.temperature,"h":self.dht_device.humidity}
        # return {"t":self.temperature,"h":self.humidity}
    
    def getRoomStateTest(self):
        print("System: getRoomStateTest\n")
        return {"t":24,"h":26}

def main():
    condi = RoomCondition(4)
    print(condi.temperature)

if __name__ == '__main__':
    main()
