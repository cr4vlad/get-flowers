from django.db import models
from django.utils import timezone
import uuid

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    ROSES = 'R'
    TULIPS = 'T'
    BOX = 'B'
    FLOWERS = 'F'
    CATEGORY_CHOICES = [
      (ROSES, 'Букеты из роз'),
      (TULIPS, 'Тюльпаны'),
      (BOX, 'Цветы в коробке'),
      (FLOWERS, 'Букеты цветов')
    ]
    category = models.CharField(max_length=255, choices=CATEGORY_CHOICES, default=FLOWERS)
    logo = models.FileField(upload_to='logos/%Y/', null=True, max_length=255)
    price = models.DecimalField(max_digits=7, decimal_places=2)

    def __str__(self):
        return self.title + " - UAH " + str(self.price)

class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=17)
    time = models.DateTimeField(default=timezone.now)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.address + " - " + str(self.time)