from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


class Salesperson(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    full_name = models.CharField(max_length=100, default="")
    employee_id = models.CharField(max_length=30, unique=True)


class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    full_name = models.CharField(max_length=100, default="")
    address = models.TextField()
    phone_number = models.TextField(max_length=20, default=None, unique=True)


class Sale(models.Model):
    price = models.FloatField()

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )

    salesperson = models.ForeignKey(
        Salesperson,
        related_name="salesperson",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_show_sale", kwargs={"pk": self.pk})

    def __str__(self):
        return (
            f"{self.price} - {self.automobile} - {self.salesperson} - {self.customer}"
        )

    class Meta:
        ordering = ("salesperson", "customer", "automobile", "price")
