from django.http import HttpResponse

def index(request):
    return render(request, 'templates/index.html')