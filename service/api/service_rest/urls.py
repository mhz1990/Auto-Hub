from django.urls import path
from .views import (
    api_technician_list,
    api_technician_detail,
    api_appointment_list,
    api_appointment_detail,
    api_cancel_appointment,
    api_finish_appointment
)

urlpatterns = [
    path(
        "technicians/",
        api_technician_list,
        name="api_technician_list",
    ),
    path(
        "technicians/<int:employee_id>/",
        api_technician_detail,
        name="api_technician_detail",
    ),
    path(
        'appointments/',
        api_appointment_list,
        name='api_appointment_list',
    ),
    path(
        'appointments/<str:vin>/',
        api_appointment_detail,
        name='api_appointment_detail',
    ),
    path(
        'appointments/<str:vin>/cancel/',
        api_cancel_appointment,
        name='api_appointment_cancel',
    ),
    path(
        'appointments/<str:vin>/finish/',
        api_finish_appointment,
        name='api_appointment_finish',
    ),
]
