# Generated by Django 4.0.3 on 2023-06-06 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_customer_customer_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='phone_number',
            field=models.IntegerField(max_length=11),
        ),
    ]
