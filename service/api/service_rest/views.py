from django.shortcuts import render
from .models import AutomobileVO
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Technician, Appointment

# Create your views here.


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name"]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ["customer", "vin"]


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = ["date_time", "reason", "status", "vin", "customer", "technician"]


@require_http_methods(["GET", "POST"])
def api_technician_list(request, employee_id=None):
    if request.method == "GET":
        if employee_id is not None:
            technicians = Technician.objects.filter(employee=employee_id)
        else:
            technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(employee_id=content["employee_id"])
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False,
                status=200
            )  # Return existing technician
        except Technician.DoesNotExist:
            try:
                technician = Technician.objects.create(**content)
                return JsonResponse(
                    technician,
                    encoder=TechnicianDetailEncoder,
                    safe=False,
                    status=201
                )  # Create new technician
            except KeyError:
                return JsonResponse(
                    {"error": "Couldn't create technician"},
                    status=400
                )


@require_http_methods(["GET", "DELETE"])
def api_technician_detail(request, employee_id):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(employee_id=employee_id)
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Technician does not exist"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            technician = Technician.objects.get(employee_id=employee_id)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Technician does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_appointment_list(request, vin=None):
    if request.method == "GET":
        if vin is not None:
            appointments = Appointment.objects.filter(vin=vin)
        else:
            appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            appointment = Appointment.objects.get(vin=content["vin"])
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False,
                status=201
            )
        except Appointment.DoesNotExist:
            try:
                appointment = Appointment.objects.create(**content)
                return JsonResponse(
                    appointment,
                    encoder=AppointmentDetailEncoder,
                    safe=False,
                    status=201
                )  # Create new appointment
            except KeyError:
                return JsonResponse(
                    {"error": "Couldn't create appointment"},
                    status=400
                )


@require_http_methods(["GET", "DELETE", "PUT"])
def api_appointment_detail(request, vin):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(vin=vin)
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Appointment does not exist"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(vin=vin)
            appointment.delete()
            return JsonResponse(
                {"message": "Appointment deleted successfully"}
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Appointment does not exist"})
            response.status_code = 404
            return response

    elif request.method == "PUT":
        content = json.loads(request.body)
        status = content.get("status")
        try:
            appointment = Appointment.objects.get(vin=vin)
            if status == "canceled":
                appointment.status = "canceled"
            elif status == "finished":
                appointment.status = "finished"
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Appointment does not exist"})
            response.status_code = 404
            return response
