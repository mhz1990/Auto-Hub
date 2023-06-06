# Generated by Django 4.0.3 on 2023-06-06 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_alter_customer_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='customer_id',
            field=models.PositiveIntegerField(default=None, unique=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='phone_number',
            field=models.PositiveBigIntegerField(default=None, unique=True),
        ),
        migrations.AlterField(
            model_name='salesperson',
            name='employee_id',
            field=models.PositiveIntegerField(unique=True),
        ),
    ]
