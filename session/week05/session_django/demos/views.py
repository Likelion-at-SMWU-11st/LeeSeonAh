from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def helloBabyLion(request): #request를 받아서
            # 장고에서 함수의 (첫번째 인자)는 무조건 request
    #return HttpResponse('장고의 세계의 들어왔습니다')  #이렇게 응답해라
    return render(request, 'crazyDjango.html')  
    # view한테 우리가 만든 template을 사용하라고 알려주기