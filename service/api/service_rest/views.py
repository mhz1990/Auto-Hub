from django.shortcuts import render
from .models import AutomobileVO
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Technician, Appointment


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ["date_time", "reason", "status", "vin", "customer"]


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = ["date_time", "reason", "status", "vin", "customer", "technician"]

    def default(self, obj):
        if isinstance(obj, Technician):
            return {
                "employee_id": obj.employee_id,
                "first_name": obj.first_name,
                "last_name": obj.last_name
            }
        return super().default(obj)


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
            status=200,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(employee_id=content["employee_id"])
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            try:
                technician = Technician.objects.create(**content)
                return JsonResponse(
                    technician,
                    encoder=TechnicianDetailEncoder,
                    safe=False,
                    status=200,
                )
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
            count, _ = Technician.objects.get(employee_id=employee_id).delete()
            return JsonResponse({"deleted": count > 0}, status=200,)
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Technician Does not exist"},
                status=404,
            )


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
            status=200,
        )
    else:
        content = json.loads(request.body)
        try:
            technician_id = content["technician"]
            technician = Technician.objects.get(employee_id=technician_id)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician"},
                status=404,
            )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
            status=200
        )


@require_http_methods(["GET", "DELETE"])
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
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment Does not exist"},
                status=400,
            )


@require_http_methods(["PUT"])
def api_cancel_appointment(request, vin):
    try:
        appointment = Appointment.objects.get(vin=vin)
        appointment.status = "canceled"
        appointment.save()
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
            status=200,
        )
    except Appointment.DoesNotExist:
        response = JsonResponse({"message": "Appointment does not exist"})
        response.status_code = 404
        return response


@require_http_methods(["PUT"])
def api_finish_appointment(request, vin):
    try:
        appointment = Appointment.objects.get(vin=vin)
        appointment.status = "finished"
        appointment.save()
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
            status=200,
        )
    except Appointment.DoesNotExist:
        response = JsonResponse({"message": "Appointment does not exist"})
        response.status_code = 404
        return response
