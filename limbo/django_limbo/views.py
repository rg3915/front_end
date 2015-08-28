from django.shortcuts import render, render_to_response

import json
from django.core import serializers
from django.http import HttpResponse, Http404

from django.views.generic import CreateView, ListView, DetailView
from django.core.urlresolvers import reverse_lazy
from django.core.paginator import Paginator
from .models import Person
from .forms import PersonForm


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def person_list_ajax(request):
    return render(request, 'core/person_list_ajax.html')


def get_person(request):
    persons = Person.objects.all().filter(id__lt=4)
    items = serializers.serialize('json', persons)
    result = json.dumps(items)
    # , content_type="application/json") não precisa no Django 1.7
    return HttpResponse(result)


class PersonList(ListView):
    template_name = 'person_list.html'
    model = Person
    paginate_by = 10

    def get_queryset(self):
        persons = Person.objects.all()
        var_get_search = self.request.GET.get('search_box')
        if var_get_search is not None:
            persons = persons.filter(firstname__icontains=var_get_search)
        return persons


class PersonDetail(DetailView):
    template_name = 'core/person_detail.html'
    model = Person


class PersonForm(CreateView):
    template_name = 'core/person_form.html'
    model = Person
    success_url = reverse_lazy('persons')
