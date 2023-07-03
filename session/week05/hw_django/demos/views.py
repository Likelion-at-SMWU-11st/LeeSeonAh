from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def introductionStudy(request):
    return render(request, 'studyDjango.html')
