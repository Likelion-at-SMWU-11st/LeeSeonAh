import requests
import json

apikey="****"
city="London"
lang="kr"
#f-string 사용 -> 우리가 원하는 변수 넣기 가능
#중괄호 안에 내가 넣어주고 싶은 변수의 이름으로 바꿀 수 있음
api=f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}&lang={lang}&units=metric"

#requests모듈 사용
result=requests.get(api)    #api주소로 우리가 요청했을때 돌아오는 응답값을 변수에 담음
print(result.text)
# print(type(result.text))

data=json.loads(result.text)    #문자열을 json type(딕셔너리문법)으로 바꿈
# print(type(data))

print(data["name"],"의 날씨입니다.")
print("날씨는",data["weather"][0]["description"],"입니다.")
print("현재 온도는",data["main"]["temp"],"입니다.")
print("하지만 체감 온도는",data["main"]["feels_like"],"입니다.")
print("최저 기온은",data["main"]["temp_min"],"입니다.")
print("최고 기온은",data["main"]["temp_max"],"입니다.")
print("기압은",data["main"]["pressure"],"입니다.")
print("습도는",data["main"]["humidity"],"입니다.")