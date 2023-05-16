"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from demos.views import helloBabyLion

urlpatterns = [
    path('admin/', admin.site.urls),
    path('crazy/', helloBabyLion),
    # 왼쪽 url (crazy/) 로 들어오면 오른쪽 함수를 실행해라
    # 외부 파일 함수를 가져오기 위해 import
]
