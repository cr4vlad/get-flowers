from django.urls import include, path
from rest_framework import routers
from . import views

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'orders', views.OrderViewSet)
router.register(r'products', views.ProductViewSet)

urlpatterns = [
    path('', include(router.urls))
]