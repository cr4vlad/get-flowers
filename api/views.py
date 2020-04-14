from rest_framework import viewsets
from .serializers import OrderSerializer
from .serializers import ProductSerializer
from getflowers.models import Order, Product

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows products to be viewed.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows orders to be edited.
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    http_method_names = ['post', 'put']