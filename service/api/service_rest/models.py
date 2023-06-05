from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.IntegerField(unique=True)


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=200)
    status = models.CharField(max_length=20)
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(Technician, on_delete=models.CASCADE)

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})

    def __str__(self):
        return f"{self.customer} - {self.date_time}"

    class Meta:
        ordering = ("date_time", "reason", "status", "vin", "customer", "technician")
