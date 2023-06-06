from django.shortcuts import render
from .models import AutomobileVO
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Technician

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
