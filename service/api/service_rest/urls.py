from django.urls import path
from .views import api_technician_list, api_technician_detail

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
]
