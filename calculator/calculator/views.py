from django.shortcuts import render,redirect,HttpResponse,HttpResponseRedirect
from django.views.generic import View



class Homeview(View):
    def get(self,request):
        return render(request,"index.html")
    
def eror_404(request):
    return render(request,'404.html')  
 
        