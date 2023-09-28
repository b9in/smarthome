import time
import board
import neopixel
import os 
import sys

class Led():
    def __init__(self, pin, num_p, neo):
        self.r = 255;
        self.g = 0;
        self.b = 0;
        self.pixel_pin = pin
        self.num_pixels = num_p
        self.ORDER = neo.GRB
        self.pixels = neo.NeoPixel(
            pin, num_p, brightness=0.2, auto_write=False, pixel_order=neo.GRB
        )

    def setColor(self, colorCode):
        print(f"System: setColorTest_{colorCode}\n")
        self.r = int(colorCode[0:2], 16)
        self.g = int(colorCode[2:4], 16)
        self.b = int(colorCode[4:6], 16)
        self.setState("on")

    def setState(self, state):
        print(f"System: setStateTest_{state}\n")
        if "on" in state:
            self.ledOn()
        elif "off" in state:
            self.ledOff()
        self.pixels.show()
        self.pixels.show()

    def ledOn(self):
        for i in range(self.num_pixels):
            self.pixels[i] = (self.r, self.g, self.b)

    def ledOff(self):
        for i in range(self.num_pixels):
            self.pixels[i] = (0, 0, 0)
        
def main():
    led = Led(board.D10, 24, neopixel)
    if "on" in sys.argv[1]:
        led.setState(sys.argv[1])
    if "off" in sys.argv[1]:
        led.setState(sys.argv[1])
    if "changeColor" in sys.argv[1]:
        led.setColorTest(sys.argv[2])

if __name__ == '__main__':
    main()