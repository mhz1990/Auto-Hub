from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale


# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model: AutomobileVO
    properties = ["vin", "sold"]


class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id"]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "customer_id",
    ]


class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = ["price", "automobile", "salesperson", "customer", "sale_id"]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonListEncoder(),
        "customer": CustomerListEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request, employee_id=None):
    if request.method == "GET":
        if employee_id is not None:
            salespeople = Salesperson.objects.filter(employee=employee_id)
        else:
            salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.get(employee_id=content["employee_id"])
            return JsonResponse(
                salesperson,
                encoder=SalespersonListEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            try:
                salesperson = Salesperson.objects.create(**content)
                return JsonResponse(
                    salesperson,
                    encoder=SalespersonListEncoder,
                    safe=False,
                )
            except KeyError:
                return JsonResponse(
                    {"error": "Couldn't create salesperson"},
                    status=400,
                )


@require_http_methods(["DELETE"])
def api_delete_salesperson(request, pk):
    if request.method == "DELETE":
        try:
            count, _ = Salesperson.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson does not exist"},
                status=400,
            )


@require_http_methods(["GET", "POST"])
def api_list_customers(request, customer_id=None):
    if request.method == "GET":
        if customer_id is not None:
            customers = Customer.objects.filter(customer=customer_id)
        else:
            customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.get(customer_id=content["customer_id"])
            return JsonResponse(
                customer,
                encoder=CustomerListEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            try:
                customer = Customer.objects.create(**content)
                return JsonResponse(
                    customer,
                    encoder=CustomerListEncoder,
                    safe=False,
                )
            except KeyError:
                return JsonResponse(
                    {"error": "Couldn't create customer"},
                    status=400,
                )


@require_http_methods(["DELETE"])
def api_delete_customer(request, pk):
    if request.method == "DELETE":
        try:
            count, _ = Customer.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=400,
            )


@require_http_methods(["GET", "POST"])
def api_list_sales(request, sale_id=None):
    if request.method == "GET":
        if sale_id is not None:
            sales = Sale.objects.filter(sale=sale_id)
        else:
            sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            sale = Sale.objects.get(sale_id=content["sale_id"])
            return JsonResponse(
                sale,
                encoder=SaleListEncoder,
                safe=False,
            )
        except Sale.DoesNotExist:
            try:
                sale = Sale.objects.create(**content)
                return JsonResponse(
                    sale,
                    encoder=SaleListEncoder,
                    safe=False,
                )
            except KeyError:
                return JsonResponse(
                    {"error": "Couldn't create sale"},
                    status=400,
                )


@require_http_methods(["DELETE"])
def api_delete_sale(request, pk):
    if request.method == "DELETE":
        try:
            count, _ = Sale.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Sale does not exist"},
                status=400,
            )
