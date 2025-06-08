from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

# テスト用API
def test_api(request):
    return JsonResponse({"message": "Hello from Django API!"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/test/', test_api),
]
