import requests

class HttpMgr:
    def __init__(self, url):
        self.root = url

    def getEvents(self, url):
        return requests.get(self.root + url).text

    def sendData(self, url, data):
        return requests.post(self.root + url, data).text