# Generated by Django 3.0.5 on 2020-04-29 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('getflowers', '0002_auto_20200429_2009'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=0, max_digits=7),
        ),
    ]
