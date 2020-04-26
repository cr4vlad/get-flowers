from rest_framework import viewsets
from .serializers import OrderSerializer, ProductSerializer, CategorySerializer
from getflowers.models import Order, Product, Category

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows products to be viewed.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows categories to be viewed.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class OrderViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows orders to be edited.
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    http_method_names = ['post', 'put']