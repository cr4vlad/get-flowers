from django.db import models
from django.utils import timezone
import uuid

class Category(models.Model):
    id = models.CharField(primary_key=True, max_length=20)
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.id + " - " + self.title

    class Meta:
        verbose_name_plural = "Categories"


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)

      #(ROSES, 'Букеты из роз'),
      #(TULIPS, 'Тюльпаны'),
      #(BOXES, 'Цветы в коробке'),
      #(FLOWERS, 'Букеты цветов')

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
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