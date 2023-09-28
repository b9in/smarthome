import os 
import sys
import time
import random
import json
import board
import neopixel

from threading import Thread
from .customcall import HttpMgr
from .condi import RoomCondition
from .led import Led
from .dusty import Dusty

class Worker:
    def __init__(self):
        self.UploadDuration = 30
        self.Timing = 3
        #self.Condi_Pin = 0
        self.Condi_Pin = 4

        self.progress = 0
        self.httpMgr = HttpMgr('')

        self.condi = RoomCondition(self.Condi_Pin)
        self.led = Led(board.D10, 24, neopixel)
        self.dust = Dusty()
        self.event = "NULL"

    def sendRoomCondition(self, sec):
        condition = {}
        while True:
            condition = self.condi.getRoomState()
            condition['d'] = self.dust.getDustyTest()
            print(json.dumps(condition))
            result = self.httpMgr.sendData("/send", {
                'type': 'condition', 
                'data': json.dumps(condition)
            })
            print(f"Upload: {result}")
            time.sleep(sec)

    def getEvent(self, sec):
        while True:
            temp = json.loads(self.httpMgr.getEvents("/flag"))
            if temp['data']['type'] == 'rgb':
                self.event = temp['data']
                self.work(json.loads(self.event['order']))
                print(self.httpMgr.getEvents("/clear"))
            time.sleep(sec)

    def work(self, order):
        if 'color' in order.keys():
            self.led.setColor(order['color'])
        if 'state' in order.keys():
            print(order['state'])
            self.led.setState(order['state']) 
    
    def test(self, sec):
        while True:
            print(self.event)
            time.sleep(sec)

    def init(self):
        print("Server Booting")
        time.sleep(1)
        print("Server ON")
        t1 = Thread(
            target=self.sendRoomCondition, 
            args=(self.UploadDuration, )
        )
        t2 = Thread(target=self.getEvent, args=(self.Timing, ))
        # t3 = Thread(target=self.test, args=(self.Timing, ))

        t1.start()
        t2.start()
        # t3.start()

def main():
    worker = Worker()
    worker.init()

if __name__ == '__main__':
    main()
