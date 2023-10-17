# SMART HOME
Google assistant를 이용한 스마트 홈 프로젝트

## 프로젝트 소개

프로젝트 참여 인원 : 4명

이 프로젝트는 라즈베리파이와 아두이노를 이용한 음성인식 스마트 홈입니다. 중앙 서버, IoT 제품, 사용자를 분리하여 편하게 사용할 수 있는 구조를 만들었습니다. WAS에서 제공되는 API를 사용하여 주기적으로 서버와 통신하면서 사용자가 전송한 제어 값이 변한 경우 해당하는 동작을 수행하고 서버에 알립니다. 또한 기기가 주기적으로 수집하는 데이터를 서버에 전송하여 WAS가 제공하는 정보를 갱신합니다.

- **FRONT-END** : HTML, CSS, JavaScript, jQuery
- **BACK-END** : PHP, Laravel, Apache, Python
- **DB** : mariaDB
- **API, Library** : OpenWeatherMap API, Google assistant API, Google Charts

## 주요 기능

#### 음성 인식 LED 제어

![ezgif-4-beefcda45f](https://github.com/b9in/smarthome/assets/128045612/b88164af-9b70-4975-adbb-4c3316c6711c)

#### GUI LED 제어

![ezgif-4-c1544c66b4](https://github.com/b9in/smarthome/assets/128045612/e46f13b4-af7c-4811-a8b2-1b15da67a284)

![ezgif-4-fa0cc8ecf8](https://github.com/b9in/smarthome/assets/128045612/39e3fc33-b9c7-4154-a0e2-fc405517c54f)

색상 코드를 입력하거나 팔레트 색상 버튼을 눌러 LED의 색상을 제어할 수 있습니다.

#### Temperature & Humidity 그래프
![ezgif-4-9f976fafb2](https://github.com/b9in/smarthome/assets/128045612/af94985e-5cc1-4679-a931-cac722febb63)





## 느낀 점
처음으로 프로젝트에서 웹 개발을 맡게 되어 이 프로젝트로 인해 웹 개발에 대한 흥미가 생겼고 HTML, CSS, JavaScript, jQuery의 기본 지식을 쌓을 수 있는 계기가 되었다. 또,아두이노와 라즈베리파이의 모듈을 활용하면서 임베디드 시스템개발 지식을 쌓을 수 있었다. 의존성 문제 때문에 Google assistant를 사용하는 것이 정말 까다로웠는데 패키지를 설치할 때 의존성을 고려하면서 개발해야겠다고 느꼈다.
