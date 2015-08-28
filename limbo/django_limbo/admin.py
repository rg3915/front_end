from django.contrib import admin
from .models import Person


class PersonAdmin(admin.ModelAdmin):

    """Customize the look of the auto-generated admin for the Person model"""
    ordering = ['firstname']
    list_display = (
        '__str__', 'cpf', 'email', 'phone', 'created_at', 'blocked')
    date_hierarchy = 'created_at'
    search_fields = ('firstname', 'lastname')

admin.site.register(Person, PersonAdmin)  # Use the customized options
